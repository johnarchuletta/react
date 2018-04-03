const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const reload = require('reload');
const session = require('express-session');

const app = express();

const config = require('./config/server.js');

app.set('view engine', 'pug');
app.set('view cache', false);
app.set('views', path.join(__dirname, 'views'));

app.use(session(config.session.options));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

const server = http.createServer(app);
reload(app);
server.listen(config.server.port, _ => console.log('Server listening on port ', config.server.port));

require('./routes')(app);