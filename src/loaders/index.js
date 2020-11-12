const expressLoader = require('./expressLoader');
const ejsLoader = require('./ejsLoader');
const routesLoader = require('./routesLoader');

module.exports = async () => {
  const server = await expressLoader();
  await ejsLoader(server);
  // routes should be the last middle-ware, because it is not apply callback
  await routesLoader(server);

  return server;
};
