const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());

let reservas = [];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.post('/reservas', (req, res) => {
  const nuevaReserva = req.body;
  reservas.push(nuevaReserva);
  res.status(201).json(nuevaReserva);
});

app.listen(port, () => {
  console.log(`Microservicio de Reservas escuchando en http://localhost:${port}`);
});
