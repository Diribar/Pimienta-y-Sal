var menu = require('../public/javascripts/menu')

const controller= {
    index: (req, res) => {
        res.render('indexView', {menu})
    },
    plato: (req, res) => {
        const plato = menu.find((element) => {return element.vinculo == req.params.valor;});
        res.render("detalleMenuView", {plato});
    },
}

module.exports = controller