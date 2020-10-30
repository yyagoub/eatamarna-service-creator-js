const express = require('express');
const public = express.Router();
const private = express.Router();

//public.use('/register', require('./registerRoute'));
//public.use('/auth', require('./loginRoute'));
public.use('/', require('./indexController'));

private.route('/').get(() => 'hello from private route');

module.exports = { public, private };