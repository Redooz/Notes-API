import { AppDataSource } from "./database/data-source"
import { app } from "./app"

async function main() {
    try {
        await AppDataSource.initialize()

        app.listen(3000);
    } catch (error) {
        console.error(error);
    }
}

main()