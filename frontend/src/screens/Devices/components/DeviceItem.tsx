import Swal from "sweetalert2";
import { Box, IconButton } from "@mui/material";
import withReactContent from "sweetalert2-react-content";
import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";

import { Device } from "../models/Device";

import styles from "../styles/DeviceItem.style";

export interface DeviceItemProps {
  data: Device;
  deleteItem: () => void;
  editItem: () => void;
}

const textClass = "text-zinc-700 text-base m-0";
const MySwal = withReactContent(Swal);

const DeviceItem = ({ data, deleteItem, editItem }: DeviceItemProps) => {
  const handleDeleteItem = () => {
    MySwal.fire({
      title: "Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) deleteItem();
    });
  };

  return (
    <Box sx={styles.cardItem} className="mb-2 bg-white p-2">
      <div className="grid">
        <div className="col-10">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p className={textClass}>{`Modelo: ${data.model}`}</p>
          <p className={textClass}>{`Almacenamiento: ${data.storage}`}</p>
        </div>
        <div className="col-2 flex align-items-center justify-content-center gap-2">
          <IconButton onClick={editItem} aria-label="edit">
            <EditOutlined />
          </IconButton>

          <IconButton onClick={handleDeleteItem} aria-label="delete">
            <DeleteOutlineOutlined color="error" />
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default DeviceItem;
