const express = require("express");
const {Router} = express;
const mongoose = require('mongoose');
const routerMenu = Router();
const menu = require("../models/menu.model");
const {client, URL} = require('../db/dbConfig.js')
mongoose.set("strictQuery", false);

client.connect(() => {

    routerMenu.get('/', ((req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            menu.find({}).then((r) => {
                res.send(r);
            });
        } catch (error) {
            res.send(error);
        }
    }));

    routerMenu.post('/', ((req, res) => {
        try {
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const {name, title, icon, link} = req.body;
            const newMenu = new menu({
                name: name,
                title: title,
                icon: icon,
                link: link,
            });
            newMenu.save().then((r) => {
                res.send('Menu creado');
            });
        } catch (error) {
            res.send(error);
        }
    }));

});

module.exports = routerMenu;
