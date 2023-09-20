const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3005;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) console.error(err);
      else res.end(data);
    });
  } else if (req.url === "/campus_danang") {
    fs.readFile("campus_danang.html", (err, data) => {
      if (err) console.error(err);
      else res.end(data);
    });
  } else if (req.url === "/campus_hanoi") {
    fs.readFile("campus_hanoi.html", (err, data) => {
      if (err) console.error(err);
      else res.end(data);
    });
  } else if (req.url === "/campus_hcm") {
    fs.readFile("campus_hcm.html", (err, data) => {
      if (err) console.error(err);
      else res.end(data);
    });
  } else {
    res.write("<h1>404 - Not Found</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log("http://localhost:" + port);
});
