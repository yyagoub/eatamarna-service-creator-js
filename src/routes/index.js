const express = require('express');

module.exports = {
  public: async (ejsLoader) => {
    const server = express();
    await ejsLoader(server);
    server.use('/login', require('./loginRoute'));

    return server;
  },

  private: async (ejsLoader) => {
    const server = express();
    await ejsLoader(server, true);
    server.use('/index', require('./indexRoute'));

    return server;
  },
};
