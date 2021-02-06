const express = require('express')
const app = express();
var path = require('path');
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/contact-me.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/contact-me.html'));
});

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});