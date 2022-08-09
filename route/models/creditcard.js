const mongoose = require('mongoose');

var creditcardSchema = new mongoose.Schema({
    email: {
        type: String
    },

    cardNumber: {
        type: String
    }
});

module.exports = mongoose.model('Creditcard', creditcardSchema);