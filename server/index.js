const express = require('express');
const path = require('path');
var session = require('express-session');


const app = express();

app.use(require('helmet')());
app.use(require('body-parser').json());

app.use(session({
  store: new (require('connect-pg-simple')(session))(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

app.use('/api', require('./router'));
app.use(express.static(path.join(__dirname, '../client')));

module.exports = app;
