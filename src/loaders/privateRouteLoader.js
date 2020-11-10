//const router = require('express').Router();

const privateRouteLoader = async (server) => {
  // private routes
  server.use('/index', require('../routes/indexRoute'));
};

module.exports = privateRouteLoader;
