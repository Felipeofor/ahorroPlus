const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const routerIngreso = Router()
const ingreso = require('../models/ingreso.model.js')
const { client, URL } = require('../db/dbConfig.js')
mongoose.set("strictQuery", false);


client.connect(() => {

    routerIngreso.get('/',async (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Traer todos los ingresos
        try {
            ingreso.find({}).then((r) => {
                res.status(200).send(r);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    routerIngreso.post('/actualizar',async (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        res.header("Access-Control-Allow-Origin", "*");
        // actualizar ingreso
        try {
            const resto = req.body.monto * 0.9;
            ingreso.findById(req.body.id).then((r) => {
                r.nro= ingreso.params,
                r.fecha= req.body.fecha,
                r.monto= req.body.monto,
                r.referencia= req.body.referencia,
                r.paratodalavida= req.body.monto * 0.1,
                r.gastosbasicos= resto * 0.6,
                r.gastosdelargoplazo= resto * 0.1,
                r.gastosdecortoplazo= resto * 0.1,
                r.emergencias= resto * 0.2,
                r.save().then((r) => {
                    res.status(200).send(r);
                });
            });
        } catch (error) {
            res.status(200).send(error);
        }
    });

    routerIngreso.post('/',async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // crear ingreso
        const resto = req.body.monto * 0.9;
        const newIngreso = new ingreso({
            nro: ingreso.length + 1,
            fecha: new Date(),
            monto: req.body.monto,
            referencia: req.body.referencia,
            paratodalavida: req.body.monto * 0.1,
            gastosbasicos: resto * 0.6,
            gastosdelargoplazo: resto * 0.1,
            gastosdecortoplazo: resto * 0.1,
            emergencias: resto * 0.2,
        });
        try {
            newIngreso.save().then((r) => {
                res.status(200).send(newIngreso);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    routerIngreso.post('/delete',async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // eliminar ingreso
        try {
            ingreso.deleteOne({_id: req.body.id}).then((r) => {
                res.status(200).send();
            });
        } catch (error) {
            res.send(error);
        }
    });

});

module.exports = routerIngreso;
