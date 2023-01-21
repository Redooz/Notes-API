import Joi from "joi";

const id = Joi.number();
const title = Joi.string().min(1).max(50);
const description = Joi.string().min(1).max(255);
const active = Joi.boolean();
const createdAt = Joi.date();
const updatedAt = Joi.date();
const deletedAt = Joi.date();

export const createNoteSchema = Joi.object({
    id: id,
    title: title.required(),
    description: description.required(),
    active: active,
    createdAt: createdAt,
    updatedAt: updatedAt,
    deletedAt: deletedAt
});

export const updateNoteSchema = Joi.object({
    id: id,
    title: title,
    description: description,
    active: active,
    createdAt: createdAt,
    updatedAt: updatedAt,
    deletedAt: deletedAt
});

export const getNoteSchema = Joi.object({
    id: id.required()
});
