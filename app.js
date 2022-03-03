const express = require("express");
const mongoose = require("mongoose");
const alienRouter = require("./routes/aliens");
const url = 'mongodb://localhost/AlienDbex'

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log("connected...");
})

app.use(express.json())

app.use('/aliens',alienRouter);

app.listen(5000, () => {
    console.log("Server started");
})

