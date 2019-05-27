

    class Server {
        constructor(){
            this.requires();
            this.port = this.config.port;
            this.app = this.express();
            this.db = new this.Database();
            this.start();
        }

        requires(){
            this.path = require('path');
            this.express = require('express');
            this.controller = require('../controller/todoController.js');
            this.config = require('../resources/configs/server.config.js');
            this.Database = require('./Database');
            this.bodyParser = require('body-parser');
            this.cors = require('cors');
        }

        middlewares(){
            this.app.use(this.cors());
            this.app.options('*', this.cors());
            this.app.use(this.bodyParser.urlencoded({ extended: false }));
            this.app.use(this.bodyParser.json());
            this.app.use(this.express.static(this.path.join(__dirname + '/../resources')));
            this.app.use('/', this.controller);
        }

        start(){
            this.middlewares();
            this.server = this.app.listen(this.port, () => {
                    console.log(`Server running on port ${this.port}`);
            })
        }
    }


    module.exports = Server;