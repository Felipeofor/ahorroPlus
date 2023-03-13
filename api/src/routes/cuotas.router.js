const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const routerCuotas = Router()
const cuotas = require('../models/cuotas.model.js')
const { client, URL } = require('../db/dbConfig.js')
mongoose.set("strictQuery", false);

client.connect(() => {
    routerCuotas.get('/', (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            cuotas.find({}).then((r) => {
                res.status(200).send(r);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    routerCuotas.post('/', (req, res) => {
        let montoCuota = (req.body.montoTotal * req.body.interes) / req.body.cuotasTotal;
        const newCuota = new cuotas({
            montoTotal: req.body.montoTotal,
            cuotasPagas: req.body.cuotasPagas,
            cuotasTotal: req.body.cuotasTotal,
            fechaEmision: req.body.fechaEmision,
            fechaVencimiento: req.body.fechaVencimiento,
            interes: req.body.interes,
            estado: req.body.estado,
            montoCuota: montoCuota,
        });
        try {
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            newCuota.save().then((r) => {
                res.status(200).send('Cuota creada')
            });
        } catch (error) {
            res.status(400).send(error)
        }
    });
});

module.exports = routerCuotas;
