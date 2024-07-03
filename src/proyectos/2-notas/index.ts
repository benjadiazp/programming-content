// importamos el módulo "express"
import express from "express";

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

const notas: string[] = [];

// creamos un endpoint con método GET
app.get("/", (req, res) => {
  res.json(notas);
  res.status(200);
});

// creamos un endpoint con método POST
app.post("/", (req, res) => {
  notas.push("New note");
  res.json(notas);
  res.status(200);
});

// iniciamos el server en el puerto 3000
app.listen(3000);
