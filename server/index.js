const express = require('express');
const path = require('path');

const app = express();

app.use(require('./router'));
app.use(express.static(path.join(__dirname, '../client')));

module.exports = app;
