export const config = {
    env: process.env.NODE_ENV || 'dev',
    connection: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: 3306,
    dBUser: process.env.TYPEORM_USERNAME,
    dbPassword: process.env.TYPEORM_PASSWORD,
    db: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    loging: process.env.TYPEORM_LOGGING,
    entities: process.env.TYPEORM_ENTITIES,
}