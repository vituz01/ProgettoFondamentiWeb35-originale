const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const router = require('./routes/router.js');

dotenv.config();

//creazione app
const app = express();

//middleware utili
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(router);


mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log("Connessione al DB effettuata");
    app.listen(process.env.PORT || 3000, () => console.log("Applicazione in ascolto..."));
})