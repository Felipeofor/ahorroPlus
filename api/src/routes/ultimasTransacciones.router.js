const express = require("express");
const {Router} = express;
const mongoose = require('mongoose');
const routerUTransacciones = Router();
const ultimasTransacciones = require('../models/ultimasTransacciones.model.js')
const { client, URL } = require('../db/dbConfig.js')
mongoose.set("strictQuery", false);

client.connect(() => {

    routerUTransacciones.get('/', (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Solo traer las ultimas 10 transacciones
        try {
            ultimasTransacciones.find({}).then(async (r) => {
                if (r.length > 10) {
                    const sort = await r.sort((a, b) => b.fecha - a.fecha).slice(0, 10)
                    res.status(200).send(sort);
                } else {
                    res.status(200).send(await r.sort((a, b) => b.fecha - a.fecha));
                }
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });
    // Crea una transaccion
    routerUTransacciones.post('/', (req, res) => {
        try {
            const {name, monto, fecha, estado, tipo} = req.body;
            const newUltimasTransacciones = new ultimasTransacciones({
                name: name,
                monto: monto,
                fecha: fecha,
                estado: estado,
                tipo: tipo,
            });
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            newUltimasTransacciones.save().then((r) => {
                res.send('Transaccion creada')
            });
            }
            catch (error) {
                res.send(error)
            }
    });

});

module.exports = routerUTransacciones;
