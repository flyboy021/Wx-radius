// Cloudflare Worker — the one-time, free proxy that lets the static app reach
// the weather service from any origin (file://, GitHub Pages, anywhere).
//
// Deploy: https://workers.cloudflare.com  ->  Create Worker  ->  paste this  ->
// Deploy. Copy the worker URL (e.g. https://wx-proxy.you.workers.dev) into
// PROXY_BASE in index.html. After that you never run a local server.

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // CORS preflight (harmless to support).
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
        },
      });
    }

    if (url.pathname.startsWith("/atis/")) {
      const icao = url.pathname.split("/")[2] || "";
      try {
        const up = await fetch("https://datis.clowd.io/api/" + encodeURIComponent(icao),
          { headers: { Accept: "application/json" } });
        const res = new Response(up.body, up);
        res.headers.set("Access-Control-Allow-Origin", "*");
        return res;
      } catch (e) {
        return new Response("[]", { status: 200,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
      }
    }

    if (!url.pathname.startsWith("/api/data/")) {
      return new Response("Wx Radius proxy OK", { status: 200 });
    }

    const target = "https://aviationweather.gov" + url.pathname + url.search;
    let upstream;
    try {
      upstream = await fetch(target, {
        headers: {
          "User-Agent": "WxRadiusApp/1.0 (dehaven.jeremy@gmail.com)",
          Accept: "application/json",
        },
        cf: { cacheTtl: 60, cacheEverything: true }, // light 60s edge cache
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "weather service unreachable" }), {
        status: 502,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    const res = new Response(upstream.body, upstream);
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res;
  },
};
