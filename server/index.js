const express = require('express');
const path = require('path');

const app = express();

app.use(require('helmet')());
app.use(require('body-parser').json());
app.use('/api', require('./router'));
app.use(express.static(path.join(__dirname, '../client')));

module.exports = app;
