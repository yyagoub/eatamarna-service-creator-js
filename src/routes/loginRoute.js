const router = require('express').Router();
const loginService = require('../services/loginService');

router.get('/', async (req, res) => {
  //const { username, password } = req.body;
  //const user = await UserService.login(username, password);
  //res.header('authorization', user.token);
  //res.send(user);
  res.render('login');
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await loginService({ username, password });
});

module.exports = router;
