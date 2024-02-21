require('dotenv').config()
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const server = require('http').createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = { app, server };