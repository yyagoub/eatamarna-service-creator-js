const routes = require('../routes');
const ejsLoader = require('./ejsLoader');

const routesLoader = async (server) => {
  server.use('/login', require('../routes/loginRoute'));
  const privateRoutes = await routes.private(ejsLoader);
  const publicRoutes = await routes.public(ejsLoader);
  server.use(publicRoutes);
  server.use(privateRoutes);
};

module.exports = routesLoader;
