import { Application, Router } from "express";
import { defaultRoute } from "./defaultRouter";
import { notesRoute } from "./notesRouter";

export function router(app: Application) {
    const router:Router = Router();

    app.use(defaultRoute);

    app.use("/api/v1",router)

    router.use("/notes", notesRoute)
}