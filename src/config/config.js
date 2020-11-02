const expressConfig = require('./expressConfig');
const ejsConfig = require('./ejsConfig');
const publicControllerConfig = require('./publicControllerConfig');
const privateControllerConfig = require('./privateControllerConfig');

const config = async () => {
  const server = await expressConfig();
  await ejsConfig(server);
  // controller shoul be the last middle ware, because it is not apply callback
  await publicControllerConfig(server);
  await privateControllerConfig(server);

  return server;
};

module.exports = config;
