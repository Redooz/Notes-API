import { NextFunction, Request, Response } from "express";

export function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    next(err);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

export function boomErrorHandler(err:any, req: Request, res: Response, next: NextFunction) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}