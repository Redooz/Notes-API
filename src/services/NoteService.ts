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

    async create(data:any): Promise<Note> {
        const newNote = Note.create();
        
        newNote.title = data.title;
        newNote.description = data.description;

        newNote.save()
        return newNote
    }

    async update(id: number, changes: any) {
        const note = await Note.findOneBy({
            id: id
        });

        if (!note) {
            throw boom.notFound("Note not found");
        }

        note.title = changes.title;
        note.description = changes.description;

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