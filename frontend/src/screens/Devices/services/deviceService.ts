import axios from "../../../api/deviceApi";
import { Device } from "../models/Device";

// Obtener todos los dispositivos
export const fetchDevices = async (): Promise<Device[]> => {
  try {
    const response = await axios.get("/devices");
    return response.data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw new Error("No se pudieron obtener los dispositivos.");
  }
};

// Crear un nuevo dispositivo
export const addDevice = async (device: Device): Promise<Device> => {
  try {
    const response = await axios.post("/devices", device);
    return response.data;
  } catch (error) {
    console.error("Error adding device:", error);
    throw new Error("No se pudo agregar el dispositivo.");
  }
};

// Actualizar un dispositivo existente
export const updateDevice = async (
  id: string,
  device: Device
): Promise<Device> => {
  try {
    const response = await axios.put(`/devices/${id}`, device);
    return response.data;
  } catch (error) {
    console.error("Error updating device:", error);
    throw new Error("No se pudo actualizar el dispositivo.");
  }
};

// Eliminar un dispositivo
export const deleteDevice = async (id: string): Promise<void> => {
  try {
    await axios.delete(`/devices/${id}`);
  } catch (error) {
    console.error("Error deleting device:", error);
    throw new Error("No se pudo eliminar el dispositivo.");
  }
};
