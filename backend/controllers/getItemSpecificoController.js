const MenuItem = require('../models/menuItem.model');

async function getItemSpecificoController(req, res, next) {
    try {
        const item = await MenuItem.findById(req.body._id);
        res.json(item);
    } catch {
        res.status(404).json({message: "Elemento non trovato"})
    }
    next();
}

module.exports = getItemSpecificoController;