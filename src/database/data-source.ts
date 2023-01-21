import "reflect-metadata"
import { DataSource } from "typeorm"
import { Note } from "../entity/Note"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "notes-api",
    synchronize: true,
    logging: true,
    entities: [Note],
    migrations: [],
    subscribers: [],
})
