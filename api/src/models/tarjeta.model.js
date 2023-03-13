const mongoose = require("mongoose");

const tarjeta = mongoose.model("tarjeta", {
    name: String,
    dateExp: String,
    number: String,
    cvv: String,
    saldo: Number,
});

module.exports = tarjeta;
