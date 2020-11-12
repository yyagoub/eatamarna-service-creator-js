const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const express = require('express');

const ejsLoader = async (server, dashboard) => {
  server.use(expressLayouts);
  // refer static files location - so we can access it directly
  server.use(express.static('public'));

  server.use('/css', express.static(path.join(__dirname, '../../public/css')));
  server.use('/img', express.static(path.join(__dirname, '../../public/img')));
  server.use('/js', express.static(path.join(__dirname, '../../public/js')));

  // Templating Engine
  server.set('view engine', 'ejs');
  server.set('views', path.join(__dirname, '../../public/views/pages'));
  //server.set('layout', '../../../public/views/layouts/layout-dashboard');
  if (dashboard)
    server.set('layout', '../../../public/views/layouts/layout-dashboard');
  else server.set('layout', '../../../public/views/layouts/layout');
};

module.exports = ejsLoader;
