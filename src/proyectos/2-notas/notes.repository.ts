import { Note } from "./types";

export abstract class NotesRepository {
  abstract findAll(): Promise<Note[]>;
  abstract findOne(id: string): Promise<Note | undefined>;
  abstract update(id: string, note: Note): Promise<void>;
  abstract create(note: Note): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
