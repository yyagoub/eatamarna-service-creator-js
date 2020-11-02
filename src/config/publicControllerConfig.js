//const router = require('express').Router();

const publicControllerConfig = async (server) => {
  // public controllers
  server.use('/', require('../controllers/indexController'));
};

module.exports = publicControllerConfig;
