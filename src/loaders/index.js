//configuarciones de express, todo lo que falta que se cargue, antes de que inicie la app

const ExpressServer = require('./server/ExpressServer');

const config = require('../config');

module.exports = async () => {
    const server = new ExpressServer();
    console.log("Expres cargado");
    server.start();
    console.log(`Servidor esta en el puerto: ${config.port}`);
}

