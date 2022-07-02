const MenuItem = require('../models/menuItem.model');

function addMenuItemController(req, res, next) {
    const newItem = new MenuItem(
        {
            nome: req.body.nome,
            ingredienti: req.body.ingredienti,
            prezzo: req.body.prezzo
        }
    );
    newItem.save()
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json({message: error});
    })
}

module.exports = addMenuItemController;