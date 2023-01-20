import { Note } from '../entity/Note';
import boom from "@hapi/boom";

export class NoteService {
    constructor() {}

    async find(): Promise<Array<Note>> {
        const result:Note[] = await Note.find();
        
        return result;
    }

    async findOne(id: number): Promise<Note|null > {
        const note = await Note.findOneBy({
            id: id
        });
        
        if (!note) {
            throw boom.notFound("Note not found");
        }

        return note;
    }

    async create(data: any): Promise<Note> {
        const newNote = Note.create();
        
        const { title, description } = data

        newNote.title = title;
        newNote.description = description;

        await newNote.save()
        return newNote
    }

    async update(id: number, changes: any) {
        const note = await Note.findOneBy({
            id: id
        });

        if (!note) {
            throw boom.notFound("Note not found");
        }

        const { title, description } = changes

        note.title = title;
        note.description = description;

        await Note.update({id: note.id,}, note)

        return note
    }

    async delete(id: number) {
        const note = await Note.findOneBy({
            id: id
        });

        if (!note) {
            throw boom.notFound("Note not found");
        }

        await Note.delete({id: note.id})
        
        return { id };
    }
}