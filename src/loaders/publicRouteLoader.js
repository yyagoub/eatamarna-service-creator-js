//const router = require('express').Router();

const publicRouteLoader = async (server) => {
  // public routes
  server.get('/', (req, res, next) => {
    res.redirect('/login');
  });
  server.use('/login', require('../routes/loginRoute'));
};

module.exports = publicRouteLoader;
