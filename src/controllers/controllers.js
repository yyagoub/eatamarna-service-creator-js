const express = require('express');
const server = express();
const router = express.Router();
const path = require('path');

router.use('/', require('./indexController'));
server.use(router);
// refer static files location - so we can access it directly
server.use(express.static('public'));
server.use('/css', express.static(__dirname + 'public/css'));
server.use('/img', express.static(__dirname + 'public/img'));
server.use('/js', express.static(__dirname + 'public/js'));
// Templating Engine
server.set('layout', '../views/layouts/layout-full-width');
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'ejs');

module.exports = server;
