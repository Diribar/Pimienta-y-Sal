var express = require('express');
var router = express.Router();

const menu  = [
  {
    título: "Carpaccio fresco",
    descripción: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.50,
  },
  {
    título: "Risotto de berenjena",
    descripción: "Risotto de berenjena y queso de cabra",
    precio: 47.00,
  },
  {
    título: "Mousse de arroz",
    descripción: "Mousse de arroz con leche y aroma de azahar",
    precio: 27.50,
  },
  {
    título: "Espárragos blancos",
    descripción: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.50,
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {'menu':menu});
});

module.exports = router;
