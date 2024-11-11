import DeviceItem from "./DeviceItem";

import { Device } from "../models/Device";

interface DeviceListProps {
  devices: Device[];
  editDevice: (device: Device) => void;
  deleteDevice: (id: any) => void;
}

const DeviceList = ({ devices, deleteDevice, editDevice }: DeviceListProps) => {
  return (
    <div className="grid">
      <div className="col-12">
        <h1 className="text-3xl font-bold my-2">Lista de dispositivos</h1>
      </div>
      <div className="col-12">
        <div className="grid">
          {devices.map((res, index) => {
            return (
              <div className="col-12" key={index}>
                <DeviceItem
                  data={res}
                  deleteItem={() => deleteDevice(res.id)}
                  editItem={() => editDevice(res)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeviceList;
