const expressLoader = require('./expressLoader');
const ejsLoader = require('./ejsLoader');
const publicRouteLoader = require('./publicRouteLoader');
const privateRouteLoader = require('./privateRouteLoader');

module.exports = async () => {
  const server = await expressLoader();
  await ejsLoader(server);
  // routes should be the last middle-ware, because it is not apply callback
  await publicRouteLoader(server);
  await privateRouteLoader(server);

  return server;
};
