const express = require('express');
const expressLayouts = require('express-ejs-layouts');
//const errorHandler = require('../config/errorHandlers');
require('dotenv').config();

const expressLoader = () => {
  const app = express();
  // interceptor: to convert every request.body to JSON object
  app.use(express.json());
  app.use(expressLayouts);
  app.use(require('../controllers/controllers').public);

  return app;
};

module.exports = expressLoader;