const express = require('express');
const app = express();
app.use(express.json());
app.get('/usuarios', (req, res) => res.json([{ id: 1, nombre: "Alex" }]));
app.listen(3001, () => console.log('Usuarios listo en puerto 3001'));
