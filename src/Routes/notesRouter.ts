import { Router } from 'express';
import { createNote, deleteNote, getNote, getNotes, updateNote } from '../controller/noteController';
import { validatorHandler } from '../middlewares/validatorHandler';
import { getNoteSchema, createNoteSchema, updateNoteSchema } from '../schemas/noteSchema';


export const notesRoute = Router();

notesRoute.get("/", getNotes);
notesRoute.get("/:id", validatorHandler(getNoteSchema, "params"), getNote);
notesRoute.post("/", validatorHandler(createNoteSchema,"body"), createNote);
notesRoute.put("/:id", validatorHandler(getNoteSchema, "params"), validatorHandler(updateNoteSchema,"body"), updateNote);
notesRoute.delete("/:id", deleteNote);