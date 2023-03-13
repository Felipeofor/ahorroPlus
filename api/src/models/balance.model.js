const mongoose = require("mongoose");

const balance = mongoose.model("balance", {
    name: String,
    series: [
        {
            name: String,
            value: Number,
            porcentaje: Number,
        }
    ]
});

module.exports = balance;
