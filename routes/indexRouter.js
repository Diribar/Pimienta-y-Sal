var express = require('express');
var router = express.Router();
var controller = require("../controlador/controlador")

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
