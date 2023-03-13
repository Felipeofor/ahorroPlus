const mongoose = require('mongoose');

const ultimasTransacciones = mongoose.model('ultimas-transacciones', {
    name: String,
    monto: Number,
    fecha: Date,
    estado: String,
    tipo: String,
});

module.exports = ultimasTransacciones;
