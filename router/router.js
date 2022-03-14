const express = require('express');
const router = express.Router();
const Signup = require('../controller/controller');

router.post('/register', Signup);

module.exports = router;