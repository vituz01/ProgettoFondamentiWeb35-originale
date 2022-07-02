const MenuItem = require('../models/menuItem.model');

async function deleteMenuItemController(req, res) {
    try {
        const item = await MenuItem.findById(req.params.id);
        await item.remove();
        res.json({message: "Elemento eliminato"});
    } catch {
        res.status(404).json({message: "Elemento non trovato"});
    }
}

module.exports = deleteMenuItemController;