const Ordine = require('../models/ordine.model');

async function getOrdineSpecificoController(req, res, next) {
    try {
        const ordine = await Ordine.findById(req.params.id);
        res.status(200).json(ordine);
    } catch {
        res.status(404).json({message: "Ordine non trovato"})
    }
    next();
}

module.exports = getOrdineSpecificoController;