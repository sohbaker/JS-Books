// jshint esversion: 6
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*',  (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.listen(process.env.PORT || 5000);
