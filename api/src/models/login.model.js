const mongoose = require("mongoose");

const login = mongoose.model("logins", {
    tipoDocumento: String,
    nroDocumento: String,
    clave: String,
});

module.exports = {login};
