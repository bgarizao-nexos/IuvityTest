import { useState, useEffect } from "react";
import { Device } from "../models/Device";
import * as deviceApi from "../services/deviceService";

const useDevices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar dispositivos al inicializar el hook
  useEffect(() => {
    loadDevices();
  }, []);

  // Función para cargar todos los dispositivos
  const loadDevices = async () => {
    setLoading(true);
    try {
      const devicesData = await deviceApi.fetchDevices();
      setDevices(devicesData);
    } catch (err) {
      setError("Error al cargar dispositivos");
    } finally {
      setLoading(false);
    }
  };

  // Agregar un nuevo dispositivo
  const addDevice = async (deviceData: Omit<Device, "id">) => {
    try {
      const newDevice = await deviceApi.addDevice(deviceData);
      setDevices((prevDevices) => [...prevDevices, newDevice]);
    } catch {
      setError("Error al agregar dispositivo");
    }
  };

  // Actualizar un dispositivo
  const updateDevice = async (id: string, updatedData: Omit<Device, "id">) => {
    try {
      await deviceApi.updateDevice(id, updatedData);
      loadDevices();
    } catch {
      setError("Error al actualizar dispositivo");
    }
  };

  // Eliminar un dispositivo
  const deleteDevice = async (id: string) => {
    try {
      await deviceApi.deleteDevice(id);
      loadDevices();
    } catch {
      setError("Error al eliminar dispositivo");
    }
  };

  return {
    devices,
    loading,
    error,
    addDevice,
    updateDevice,
    deleteDevice,
    reloadDevices: loadDevices,
  };
};

export default useDevices;
