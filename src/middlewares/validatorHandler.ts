import { NextFunction, Request, Response } from "express";
import boom from '@hapi/boom';

export function validatorHandler(schema: any, property: any) {
    return (req: Request, res: Response, next: NextFunction) => {
        let data: any = []
    
        switch(property) { 
            case 'params': { 
                data = req.params;
                break; 
            } 
            case 'body': { 
                data = req.body;
                break; 
            } 
            case 'query': { 
                data = req.query;
                break; 
            } 
            default: { 
                data = '';
                break; 
            } 
        } 

        const { error } = schema.validate(data, {abortEarly: false});

        if (error) {
            next(boom.badRequest(error));
        } 
        next();
    }
}