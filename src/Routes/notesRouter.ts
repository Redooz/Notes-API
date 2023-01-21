import { Router } from 'express';
import { createNote, deleteNote, getNote, getNotes, updateNote } from '../controller/noteController';


export const notesRoute = Router();

notesRoute.get("/", getNotes);
notesRoute.get("/:id", getNote);
notesRoute.post("/", createNote);
notesRoute.put("/:id", updateNote);
notesRoute.delete("/:id", deleteNote);