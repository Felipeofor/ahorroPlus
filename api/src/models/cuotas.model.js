const moongoose = require('mongoose');

const cuotas = moongoose.model('cuotas', {
    montoTotal: String,
    cuotasPagas: String,
    cuotasTotal: String,
    fechaEmision: Date,
    fechaVencimiento: Date,
    interes: String,
    estado: String,
    montoCuota: String,
});

module.exports = cuotas;
