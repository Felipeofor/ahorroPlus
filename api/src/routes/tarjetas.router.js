const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const routerTarjetas = Router();
const tarjetas = require('../models/tarjeta.model');
const {client, URL} = require("../db/dbConfig");
mongoose.set("strictQuery", false);

client.connect(() => {

    routerTarjetas.get('/', (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            tarjetas.find({}).then(async (r) => {
                res.status(200).send(await r);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // traer tarjeta por id
    routerTarjetas.get('/:id', (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            tarjetas.find({_id: req.params.id}).then(async (r) => {
                res.status(200).send(await r);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    routerTarjetas.post('/', (req, res) => {
        const {name, dateExp, number, cvv, saldo} = req.body;
        if (!name || !dateExp || !number || !cvv, !saldo) {
            res.send('Faltan datos');
        } else {
            const newTarjeta = new tarjetas({
                name: name,
                dateExp: dateExp,
                number: number,
                cvv: cvv,
                saldo: saldo
            });
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            newTarjeta.save().then((r) => {
                res.send('Tarjeta creada');
            });
        }
    });

});

module.exports = routerTarjetas;
