const moongoose = require('mongoose');

const ingreso = moongoose.model('ingreso', {
    nro: Number,
    fecha: Date,
    monto: Number,
    referencia: String,
    paratodalavida: Number,
    gastosbasicos: Number,
    gastosdelargoplazo: Number,
    gastosdecortoplazo: Number,
    emergencias: Number,
});

module.exports = ingreso;
