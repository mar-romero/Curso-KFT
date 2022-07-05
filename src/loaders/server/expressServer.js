//configuracion de como levantr express

const express = require('express');
const config = require('../../config')
const morgan = require('morgan');
class ExpressServer {
    constructor() {
        this.app = express();
        this.port = config.port;
        this._middlewares();
        this.basePathUser = `${config.api.prefix}/users`;
        this._routes();
    }
    _middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
    }
    _routes() {
        this.app.head('/status', (req, res) => {
            res.status(200).end();
        })
        console.table()
        this.app.use(this.basePathUser, require('../../routes/users'));
    }
    async start() {
        this.app.listen(this.port, (error) => {
            if (error) {
                console.log(error);
                process.exit(1);
                return;
            }
        });
    }
}

module.exports = ExpressServer;
