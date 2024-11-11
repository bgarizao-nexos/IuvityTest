// tests/deviceController.test.ts

import request from "supertest";
import app from "../src/app"; // Asegúrate de que la ruta sea correcta

describe("Device API", () => {
  let newDeviceId: number;

  it("debería agregar un nuevo dispositivo", async () => {
    const response = await request(app).post("/api/devices").send({
      name: "Dispositivo Test",
      model: "Modelo 123",
      storage: 128,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "Dispositivo Test");
    expect(response.body).toHaveProperty("model", "Modelo 123");
    expect(response.body).toHaveProperty("storage", 128);

    newDeviceId = response.body.id; // Guardamos el ID para las siguientes pruebas
  });

  it("debería actualizar un dispositivo existente", async () => {
    const response = await request(app)
      .put(`/api/devices/${newDeviceId}`)
      .send({
        name: "Dispositivo Actualizado",
        model: "Modelo 456",
        storage: 256,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Dispositivo actualizado correctamente");
  });

  it("debería eliminar un dispositivo", async () => {
    const response = await request(app).delete(`/api/devices/${newDeviceId}`);

    expect(response.status).toBe(200);
  });
});
