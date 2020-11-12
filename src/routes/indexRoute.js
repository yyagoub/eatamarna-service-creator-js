const router = require('express').Router();
//const UserService = require('../services/UserService');

router.get('/', async (req, res) => {
  //const { username, password } = req.body;
  //const user = await UserService.login(username, password);
  //res.header('authorization', user.token);
  //res.send(user);
  res.render('index');
});

module.exports = router;
