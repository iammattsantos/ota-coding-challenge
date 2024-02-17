import { INote } from '../interface';
import { notes } from '../database';
import ShortUniqueId from 'short-unique-id';

export const getNotes = (): INote[] => {
  return notes;
};

export const getNoteById = (id: string): INote | null => {
  return notes.find((n) => n.id === id) || null;
};

export const createNote = (title: string, body: string): void => {
  const uuid = new ShortUniqueId();
  const newNote: INote = {
    id: uuid.rnd(),
    title,
    body,
  };

  notes.push(newNote);
};

export const updateNote = (id: string, title: string, body: string): void => {
  const note = getNoteById(id);

  if (!note) {
    throw new Error('Note not found');
  }

  note.title = title;
  note.body = body;
};

export const deleteNote = (id: string): void => {
  const note = getNoteById(id);

  if (!note) {
    throw new Error('Note not found');
  }

  notes.splice(notes.indexOf(note), 1);
};
