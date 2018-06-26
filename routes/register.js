var express = require('express');
var router = express.Router();
var controller = require('../app/controllers/user');

/* Register. */
router.get('/', controller.getRegister);

router.post('/', controller.postRegister);

module.exports = router;
