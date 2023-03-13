const moongoose = require('mongoose');

const gestor = moongoose.model('gestor', {
    nro: Number,
    monto: Number,
    referencia: String,
    fecha: Date,
    gastosbasicos: Number,
    gastosdelargoplazo: Number,
    gastosdecortoplazo: Number,
    emergencias: Number,
});

module.exports = gestor;
