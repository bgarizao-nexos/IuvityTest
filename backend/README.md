# Backend API

Este es un proyecto backend construido con **Node.js** y **TypeScript**. La API proporciona endpoints para la gestión de dispositivos (CRUD) y está configurada para funcionar con una base de datos **MySQL**.

## Tecnologías

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **Express**: Framework para crear la API RESTful.
- **MySQL**: Base de datos para almacenar los dispositivos.
- **Jest**: Framework para realizar pruebas unitarias.
- **Supertest**: Herramienta para realizar pruebas HTTP.

## Instalación

1. Clona este repositorio.

   ```bash
   git clone <repositorio-url>
   cd <nombre-del-repositorio>
   ```

2. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

3. Configura la base de datos:

   - Crea una base de datos en **MySQL** llamada `devices_db`.
   - Asegúrate de tener configurados los datos de conexión en el archivo `.env`.

4. Crea el archivo `.env` con los siguientes parámetros de conexión:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu-contraseña
   DB_NAME=devices_db
   PORT=5000
   ```

5. Ejecuta las migraciones para crear las tablas necesarias en la base de datos.

   ```bash
   npm run migrate
   ```

## Iniciar el Servidor

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm start
```

El servidor estará corriendo en `http://localhost:5000`.

## Rutas de la API

- `GET /api/devices`: Obtiene la lista de dispositivos.
- `POST /api/devices`: Crea un nuevo dispositivo.
- `PUT /api/devices/:id`: Actualiza un dispositivo existente.
- `DELETE /api/devices/:id`: Elimina un dispositivo.

## Pruebas Unitarias

Este proyecto incluye pruebas unitarias utilizando **Jest** y **Supertest** para probar los endpoints de la API.

1. Para ejecutar las pruebas unitarias, usa el siguiente comando:

   ```bash
   npm test
   ```

   Jest se encargará de ejecutar las pruebas y mostrar los resultados en la consola.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
.
├── src
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── app.ts
├── tests
│   └── deviceController.test.ts
├── .env
├── jest.config.js
└── package.json
```

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna idea para mejorar este proyecto, abre un _pull request_.

## Licencia

Este proyecto está licenciado bajo la **MIT License**.
