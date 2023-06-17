const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/routes');
const cors = require('cors');
require('dotenv').config();


const app = express();

const ENV = process.env;

app.use(cors());
app.use(express.json());

app.use('/user', route);
mongoose.connect(ENV.DB)
    .then(() => {
        app.listen(ENV.PORT, () => {
            console.log("Listening on Port ", ENV.PORT);
            console.log("DB Connection established");
        })
    })
    .catch((error) => {
        console.log("ERROR: ", error);
    })
