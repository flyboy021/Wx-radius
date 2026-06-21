// Zero-dependency server for Wx Radius.
//  1. Serves the static web app (index.html, manifest, sw.js, icons).
//  2. Proxies /api/data/* to the FAA Aviation Weather Center.
//
// The proxy exists because aviationweather.gov does not allow cross-origin
// (CORS) browser requests. By serving the page and the API from the same
// origin, the browser is happy and we add the required User-Agent header.
//
// Run:  node server.js   then open http://localhost:3000

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const AWC_HOST = "aviationweather.gov";
const UA = "WxRadiusApp/1.0 (contact@example.com)"; // identify your app to AWC

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function proxy(req, res) {
  // Forward /api/data/<endpoint>?<query> to the AWC API.
  const target = "https://" + AWC_HOST + req.url.replace(/^\/api/, "/api");
  const opts = { headers: { "User-Agent": UA, Accept: "application/json" } };
  https
    .get(target, opts, (up) => {
      res.writeHead(up.statusCode, {
        "Content-Type": up.headers["content-type"] || "application/json",
        "Cache-Control": "no-store",
      });
      up.pipe(res);
    })
    .on("error", (e) => {
      res.writeHead(502, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Upstream weather service unreachable", detail: e.message }));
    });
}

function serveStatic(req, res) {
  let rel = decodeURIComponent(req.url.split("?")[0]);
  if (rel === "/") rel = "/index.html";
  const file = path.join(__dirname, path.normalize(rel).replace(/^(\.\.[/\\])+/, ""));
  if (!file.startsWith(__dirname)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404).end("Not found"); return; }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}

http
  .createServer((req, res) => {
    if (req.url.startsWith("/api/")) proxy(req, res);
    else serveStatic(req, res);
  })
  .listen(PORT, () => console.log(`Wx Radius running at http://localhost:${PORT}`));
