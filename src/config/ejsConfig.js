const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const express = require('express');

const ejsConfig = async (server) => {
  server.use(expressLayouts);
  // refer static files location - so we can access it directly
  server.use(express.static('public'));

  server.use('/css', express.static(__dirname + '../../public/css'));
  server.use('/img', express.static(__dirname + '../../public/img'));
  server.use('/js', express.static(__dirname + '../../public/js'));

  // Templating Engine
  server.set('view engine', 'ejs');
  server.set('views', path.join(__dirname, '../../public/views/pages'));
  //server.set('layout', '../../../public/views/layouts/layout-dashboard');
  server.set(
    'layout',
    '../../../public/views/layouts/layout-dashboard',
    '../../../public/views/layouts/layout-dashboard'
  );
};

module.exports = ejsConfig;
