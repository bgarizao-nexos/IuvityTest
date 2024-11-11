import { render, screen, fireEvent } from "@testing-library/react";
import DeviceList from "../components/DeviceList";
import { Device } from "../models/Device";

// Mocks de las funciones
const mockEditDevice = jest.fn();
const mockDeleteDevice = jest.fn();

// Datos de prueba
const devices: Device[] = [
  { id: 1, name: "Device 1", model: "Model 1", storage: "128" },
  { id: 2, name: "Device 2", model: "Model 2", storage: "256" },
];

describe("DeviceList Component", () => {
  beforeEach(() => {
    // Limpiar mocks antes de cada prueba
    mockEditDevice.mockClear();
    mockDeleteDevice.mockClear();
  });

  test("debe renderizar la lista de dispositivos", () => {
    render(
      <DeviceList
        devices={devices}
        editDevice={mockEditDevice}
        deleteDevice={mockDeleteDevice}
      />
    );

    // Verifica que el título se renderiza
    expect(screen.getByText("Lista de dispositivos")).toBeInTheDocument();

    // Verifica que los dispositivos se renderizan
    devices.forEach((device) => {
      expect(screen.getByText(device.name)).toBeInTheDocument();
    });
  });

  test("debe llamar a editDevice cuando se presiona el botón de editar", () => {
    render(
      <DeviceList
        devices={devices}
        editDevice={mockEditDevice}
        deleteDevice={mockDeleteDevice}
      />
    );

    // Simula el clic en el botón de editar para el primer dispositivo
    const editButtons = screen.getAllByRole("button", { name: /edit/i });
    fireEvent.click(editButtons[0]);

    // Verifica que la función editDevice se haya llamado con el dispositivo correcto
    expect(mockEditDevice).toHaveBeenCalledWith(devices[0]);
  });
});
