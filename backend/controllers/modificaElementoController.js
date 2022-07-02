const MenuItem = require('../models/menuItem.model');

function modificaElementoController(req, res, next) {
    try {
    MenuItem.findOneAndUpdate({ _id: req.params.id },
        {
            nome: req.body.nome,
            ingredienti: req.body.ingredienti,
            prezzo: req.body.prezzo
        })
        .then(
        res.json({
            "message": "Elemento modificato"
        })
        );
    } catch(err) {
        res.json({errore: err});
    };
}

module.exports = modificaElementoController;