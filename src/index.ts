import { AppDataSource } from "./database/data-source"
import { app } from "./app"
import { router } from "./Routes";

async function main() {
    try {
        await AppDataSource.initialize()

        router(app)
        app.listen(3000);
    } catch (error) {
        console.error(error);
    }
}

main()