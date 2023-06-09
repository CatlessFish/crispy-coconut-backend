var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

// const jwt = require('jsonwebtoken');
// const bcryptjs = require('bcryptjs');
// const { User } = require('../db/models')

router.get('/', function (req, res, next) {
  res.send('api');
});

router.use('/user', require('./api_v1/user'));
router.use('/wall', auth, require('./api_v1/wall'));
router.use('/msgBox', auth, require('./api_v1/msgBox'));
router.use('/post', auth, require('./api_v1/post'));
router.use('/square', auth, require('./api_v1/square'));

module.exports = router;
