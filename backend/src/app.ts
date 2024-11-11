import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import deviceRoutes from './routes/deviceRoutes';
import pool from './config/database';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5001;

// Habilitar CORS para todos los orígenes
app.use(cors());

// Middlewares
app.use(express.json()); // Para parsear JSON

// Rutas
app.use('/api/devices', deviceRoutes);

// Validar conexión a la base de datos
pool.getConnection()
  .then(connection => {
    console.log('Conectado a la base de datos MySQL');
    connection.release();
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
