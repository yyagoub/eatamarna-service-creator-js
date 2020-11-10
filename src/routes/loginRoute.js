const loginRoute = require('express').Router();
const loginService = require('../services/loginService');

loginRoute.get('/', async (req, res) => {
  //const { username, password } = req.body;
  //const user = await UserService.login(username, password);
  //res.header('authorization', user.token);
  //res.send(user);
  res.render('login', { layout: '../layouts/layout' });
});

loginRoute.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await loginService({ username, password });
});

module.exports = loginRoute;
