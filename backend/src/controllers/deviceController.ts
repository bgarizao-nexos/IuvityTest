import { Request, Response } from "express";
import db from "../config/database";

// Obtener todos los dispositivos
export const getDevices = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM devices");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener dispositivos" });
  }
};

// Obtener un dispositivo por ID
export const getDeviceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows]: any = await db.query("SELECT * FROM devices WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      res.status(404).json({ message: "Dispositivo no encontrado" });
      return;
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el dispositivo" });
  }
};

// Agregar un nuevo dispositivo
export const addDevice = async (req: Request, res: Response) => {
  const { name, model, storage } = req.body;
  try {
    const result: any = await db.query(
      "INSERT INTO devices (name, model, storage) VALUES (?, ?, ?)",
      [name, model, Number(storage)]
    );
    res.json({ id: result[0].insertId, name, model, storage });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Actualizar un dispositivo
export const updateDevice = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, model, storage } = req.body;
  try {
    const result: any = await db.query(
      "UPDATE devices SET name = ?, model = ?, storage = ? WHERE id = ?",
      [name, model, Number(storage), id]
    );
    if (result[0].affectedRows === 0) {
      res.status(404).json({ message: "Dispositivo no encontrado" });
      return;
    }
    res.json({ message: "Dispositivo actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el dispositivo" });
  }
};

// Eliminar un dispositivo
export const deleteDevice = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result: any = await db.query("DELETE FROM devices WHERE id = ?", [
      id,
    ]);
    if (result[0].affectedRows === 0) {
      res.status(404).json({ message: "Dispositivo no encontrado" });
      return;
    }
    res.json({ message: "Dispositivo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el dispositivo" });
  }
};
