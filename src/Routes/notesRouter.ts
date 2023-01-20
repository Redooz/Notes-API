import { Request, Response, Router } from 'express';

export const notesRoute = Router();

notesRoute.get('/', (req: Request, res:Response) => {
    res.send("Notes");
});