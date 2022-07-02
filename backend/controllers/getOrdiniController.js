const Ordine = require('../models/ordine.model');

async function getOrdiniController(req,res,next) {
    try {
        const ordini = await Ordine.find();
        res.json(ordini);        
    } catch(err) {
        res.json({message: err});
    }
}

module.exports = getOrdiniController;