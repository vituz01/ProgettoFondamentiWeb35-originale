const Ordine = require('../models/ordine.model');

function submitOrdine(req, res, next) {
    const nuovoOrdine = new Ordine(
        {
            elemento: req.body.elemento,
            quantità: req.body.quantità,
            importo: req.body.importo
        }
    );
    nuovoOrdine.save()
    .then(data => res.json(data))
    .catch(err => res.json({errore: err}))
}

module.exports = submitOrdine;