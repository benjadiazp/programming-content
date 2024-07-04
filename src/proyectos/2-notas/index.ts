// importamos el módulo "express"
import express from "express";
import { Request, Response } from "express";
import { Note } from "./types";

// Express es un framework para hacer aplicaciones web.
// inicializamos express y lo guardamos en la constante app
const app = express();

/*
    HTTP (Hiper-Text Transport Protocol):
        METHOD:
            - GET (obtener un dato)
            - POST (realizar una acción o insertar un dato)
            - PUT (reemplazar un dato)
            - PATCH (modificar un dato)
            - DELETE (eliminar un dato)
        HEAD:
            - status
            - redirect
            - etc
        BODY:
            - json
            - HTML (Hiper-Text Markup Language)
            - etc
*/

const notes: Note[] = [];

app.use(express.json());

// creamos un endpoint con método GET
app.get("/", (req: Request, res: Response) => {
  res.json(notes);
  res.status(200);
});

// creamos un endpoint con método POST
app.post("/", async (req: Request, res: Response) => {
  const newNote = await req.body?.note;
  if (!newNote) {
    res.status(400).send("No se ha enviado la nota");
    return;
  }
  notes.push(newNote);
  res.json(notes);
  res.status(200);
});

// iniciamos el server en el puerto 3000
app.listen(3000);
