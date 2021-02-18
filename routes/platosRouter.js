var express = require('express');
var router = express.Router();
var controller = require("../controlador/controlador")

router.get('/:valor', controller.plato);

module.exports = router;
