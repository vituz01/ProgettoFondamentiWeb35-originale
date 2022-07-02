const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordineSchema = new Schema({
    elemento: {
        type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem',
        required: true
    },
    quantità: {
        type: Number,
        default: 1
    },
    importo: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
})

const Ordine = mongoose.model('Ordine', ordineSchema);

module.exports = Ordine;