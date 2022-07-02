const MenuItem = require('../models/menuItem.model');

async function getMenuItemsController(req,res,next) {
    try {
        const items = await MenuItem.find();
        res.json(items);   
    } catch(err) {
        res.json({message: err});
    }
}

module.exports = getMenuItemsController;