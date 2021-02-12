var express = require('express');
var menu = require('../public/javascripts/menu')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexView', {'menu':menu});
});

module.exports = router;
