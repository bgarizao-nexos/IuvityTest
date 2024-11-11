import { Box, Button, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { Device } from "../models/Device";

import styles from "../styles/DeviceModalForm.style";

interface DeviceModalFormProps {
  isOpen: boolean;
  device: Device | null;
  onSave: (device: Device) => void;
  onClose: () => void;
}

const DeviceModalForm = ({
  isOpen,
  device,
  onSave,
  onClose,
}: DeviceModalFormProps) => {
  const [data, setData] = useState<Device | null>(null);

  useEffect(() => {
    setData(device);
  }, [device]);

  const handleSubmit = () => {
    onSave(data as Device);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={styles.modalBox}
        className="absolute top-50 left-50 bg-white p-4 w-6"
      >
        <div className="grid">
          <div className="col-12">
            <h2 className="m-0">
              {device?.id ? "Editar" : "Crear"} Dispositivo
            </h2>
          </div>
          <div className="col-12">
            <TextField
              label="Nombre"
              variant="standard"
              required
              autoComplete="off"
              className="w-full"
              type="text"
              value={data?.name || ""}
              onChange={(e) =>
                setData({ ...data, name: e.target.value } as Device)
              }
            />
          </div>
          <div className="col-12">
            <TextField
              label="Modelo"
              variant="standard"
              required
              autoComplete="off"
              className="w-full"
              type="text"
              value={data?.model || ""}
              onChange={(e) =>
                setData({ ...data, model: e.target.value } as Device)
              }
            />
          </div>
          <div className="col-12">
            <TextField
              label="Almacenamiento"
              variant="standard"
              required
              autoComplete="off"
              className="w-full"
              type="number"
              value={data?.storage || ""}
              onChange={(e) =>
                setData({ ...data, storage: e.target.value } as Device)
              }
            />
          </div>
          <div className="col-12 mt-3">
            <Button
              variant="contained"
              className="w-full"
              size="large"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeviceModalForm;
