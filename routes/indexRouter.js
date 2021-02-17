var express = require('express');
var menu = require('../public/javascripts/menu')
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {res.render('indexView', {menu})});

module.exports = router;
