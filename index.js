var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {});

app.listen(3002, function () {
  console.log('Documentation app listening on port 3002!')
});
