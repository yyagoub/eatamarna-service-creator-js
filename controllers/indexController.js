const express = require('express');
const router = express.Router();
//const UserService = require('../services/UserService');

router.post('/', async (req, res) => {
  //const { username, password } = req.body;
  //const user = await UserService.login(username, password);
  //res.header('authorization', user.token);
  //res.send(user);
});

module.exports = router;