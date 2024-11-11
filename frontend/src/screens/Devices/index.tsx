import { useState } from "react";
import { Button } from "@mui/material";

import DeviceList from "./components/DeviceList";
import DeviceModalForm from "./components/DeviceModalForm";

import useDevices from "./hooks/useDevice";

import { Device } from "./models/Device";

const Devices = () => {
  const { devices, loading, error, addDevice, updateDevice, deleteDevice } =
    useDevices();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  const handleAddDevice = () => {
    setSelectedDevice(null);
    setModalOpen(true);
  };

  const handleEditDevice = (device: Device) => {
    setSelectedDevice(device);
    setModalOpen(true);
  };

  const handleSaveDevice = async (deviceData: Omit<Device, "id">) => {
    if (selectedDevice) {
      await updateDevice(selectedDevice.id, deviceData);
    } else {
      await addDevice(deviceData);
    }
    setModalOpen(false);
  };

  return (
    <>
      <DeviceModalForm
        isOpen={isModalOpen}
        device={selectedDevice}
        onSave={handleSaveDevice}
        onClose={() => setModalOpen(false)}
      />
      <div className="pt-7 sm:pt-8 px-4 sm:px-6">
        {/* {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Cargando dispositivos...</p>} */}
        <div className="text-right">
          <Button onClick={handleAddDevice} variant="outlined">
            Crear Nuevo
          </Button>
        </div>
        <DeviceList
          devices={devices}
          editDevice={handleEditDevice}
          deleteDevice={deleteDevice}
        />
      </div>
    </>
  );
};

export default Devices;
