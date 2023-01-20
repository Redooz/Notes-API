"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    env: process.env.NODE_ENV || 'dev',
    connection: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    dBUser: process.env.TYPEORM_USERNAME,
    dbPassword: process.env.TYPEORM_PASSWORD,
    db: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    loging: process.env.TYPEORM_LOGGING,
    entities: process.env.TYPEORM_ENTITIES,
};
//# sourceMappingURL=config.js.map