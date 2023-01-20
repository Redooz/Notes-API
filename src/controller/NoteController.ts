import { Request, Response, NextFunction } from 'express';
import { NoteService } from "../services/NoteService";

const service = new NoteService()

export async function getNotes(req: Request, res:Response, next:NextFunction) {
    try {
        const notes = await service.find();
        res.json(notes);
    } catch (error) {
        next(error);
    }

}

export async function getNote(req: Request, res:Response, next:NextFunction) {
    try {
        const { id } = req.params;
        const note = await service.findOne(parseInt(id));

        res.json(note)
    } catch (error) {
        next(error);
    }
}

export async function createNote(req: Request, res:Response, next:NextFunction) {
    try {
        const body = req.body;
        const newNote = await service.create(body);

        res.json(newNote)
    } catch (error) {
        next(error);
    }
}

export async function updateNote(req: Request, res:Response, next:NextFunction) {
    try {
        const { id } = req.params;
        const body = req.body;
        const newNote = await service.update(parseInt(id), body);

        res.json(newNote)
    } catch (error) {
        next(error);
    }
}

export async function deleteNote(req: Request, res:Response, next:NextFunction) {
    try {
        const { id } = req.params;
        const note = await service.delete(parseInt(id));

        res.json(note)
    } catch (error) {
        next(error);
    }
}