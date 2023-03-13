const express = require('express');
const config = require('./config.js');
const routerUser = require('./routes/login.router.js');
const routerBalance = require('./routes/balance.router.js');
const routerUTransacciones = require("./routes/ultimasTransacciones.router.js");
const routerTarjetas = require("./routes/tarjetas.router.js");
const routerMenu = require("./routes/menu.router.js");
const routerCuotas = require("./routes/cuotas.router.js");
const routerIngreso = require("./routes/ingreso.router.js");
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json())
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/login', routerUser);
app.use('/api/balance', routerBalance);
app.use('/api/ultimas-transacciones', routerUTransacciones);
app.use('/api/tarjetas', routerTarjetas);
app.use('/api/menu', routerMenu);
app.use('/api/cuotas', routerCuotas);
app.use('/api/ingreso', routerIngreso);

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
}   );
