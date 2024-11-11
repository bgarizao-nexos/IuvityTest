import { Router } from "express";
import {
  getDevices,
  getDeviceById,
  addDevice,
  updateDevice,
  deleteDevice,
} from "../controllers/deviceController";

const router = Router();

router.get("/", getDevices);
router.get("/:id", getDeviceById);
router.post("/", addDevice);
router.put("/:id", updateDevice);
router.delete("/:id", deleteDevice);

export default router;
