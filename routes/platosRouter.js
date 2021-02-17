var express = require('express');
var router = express.Router();

var menu = require('../public/javascripts/menu')

router.get('/:valor', (req, res) => {
    const plato = menu.find((element) => {return element.vinculo == req.params.valor;});
    res.render("detalleMenuView", {plato});
});

module.exports = router;
