const express = require('express');
const router = express.Router();
const Creditcard = require('./models/creditcard');

router.get('/', (req, res) => {
    res.render('full')
})

router.post('/submitCard', (req, res) => {
    const creditcard = new Creditcard ({
        email: req.body.email,
        cardNumber: req.body.cardNumber
    });

    Creditcard.collection.insertOne(creditcard)
    .then(result => {
        res.render('full')
    })
    .catch(err => console.log(err));
})

module.exports = router;