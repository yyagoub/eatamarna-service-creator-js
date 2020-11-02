const express = require('express');
const session = require('express-session');
require('dotenv').config();

const expressConfig = async () => {
  const server = express();
  // interceptor: to convert every request.body to JSON object
  server.use(express.json());
  // Express body parser
  server.use(express.urlencoded({ extended: false }));
  // Express session
  server.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      sameSite: true,
    })
  );
  return server;
};

module.exports = expressConfig;
