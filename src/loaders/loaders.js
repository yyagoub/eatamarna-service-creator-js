const loaders = async () => {
    const server = require('./expressLoader')();
    return server;
  };
  
  module.exports = loaders;