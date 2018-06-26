var express = require('express');
var router = express.Router();
var controller = require('../app/controllers/user');

/* Login */
router.get('/', controller.getLogin);

router.post('/', controller.postLogin);

module.exports = router;
