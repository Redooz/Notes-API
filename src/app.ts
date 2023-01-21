import express from "express";
import { boomErrorHandler, logErrors } from "./middlewares/errorHandler";
import { router } from "./Routes";

export const app = express()

app.use(express.json());

router(app)

app.use(logErrors);
app.use(boomErrorHandler);
