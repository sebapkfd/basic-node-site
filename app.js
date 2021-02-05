const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let pagePath = q.pathname;

  if(pagePath === '/' || pagePath.includes('index')) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data)
      return res.end()
    })
  }
  else if(pagePath.includes('about')) {
    fs.readFile('about.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data)
      return res.end()
    })
  }
  else if(pagePath.includes('contact')) {
    fs.readFile('contact-me.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data)
      return res.end()
    })
  }
  else {
    fs.readFile('404.html', (err, data) => {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data)
      return res.end()
    })
  }
}).listen(8080);