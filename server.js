// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    handle(req, res, parsedUrl);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });

  return server;
});
