const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
  res.type('.html');
  res.sendFile(__dirname + '/index.html');
});

app.listen(4444, console.log('serving on 4444'));
