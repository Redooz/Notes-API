"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var config_1 = require("./config/config");
var HOST = encodeURIComponent(config_1.config.host);
var PORT = parseInt(encodeURIComponent(config_1.config.port));
var USERNAME = encodeURIComponent(config_1.config.dBUser);
var DB = encodeURIComponent(config_1.config.db);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: "",
    database: DB,
    synchronize: true,
    logging: true,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map