# Notes App

## Cómo comenzar

Ejecuta los siguientes comandos:

- npm i -y
- npm i typescript express
- npm i -D @types/node @types/express
- Crear un archivo `tsconfig.json` con el siguiente contenido:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "out"
  }
}
```
