const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./route/pages')
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', route);

mongoose.connect("mongodb+srv://Meepmeep:l4stm33p@freecluster.o0lywyw.mongodb.net/?retryWrites=true&w=majority", {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3000, () => {
        console.log("server up")
    })
})