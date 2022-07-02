const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    ingredienti: {
        type: String,
        required: true
    },
    prezzo: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;