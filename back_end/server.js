const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json({ limit: '50mb' }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'KennyTellez',
  password: 'incorrecto',
  database: 'database_vfs'

});

db.connect((err) => {
  if (err) {
    console.error('Error de conexion a la base de datos', err);
  } else {
    console.error('Conexion exitosa a la base de datos');
  }
});

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor backend en funcionamiento en el puerto ${port}`);

});

app.use(cors());

const crudRoutes = require('./routes/crudRoutes.js')(db);
app.use('/crud', crudRoutes);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).send({ error: 'Error en el analisis de JSON' })
  } else {
    next();
  }
});

