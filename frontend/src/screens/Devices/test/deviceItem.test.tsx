// DeviceItem.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DeviceItem, { DeviceItemProps } from "../components/DeviceItem";

import { Device } from "../models/Device";

describe("DeviceItem", () => {
  const mockDevice: Device = {
    id: 1,
    name: "Dispositivo de prueba",
    model: "Modelo XYZ",
    storage: "128",
  };

  const mockDeleteItem = jest.fn();
  const mockEditItem = jest.fn();

  const renderComponent = (props: Partial<DeviceItemProps> = {}) => {
    return render(
      <DeviceItem
        data={mockDevice}
        deleteItem={mockDeleteItem}
        editItem={mockEditItem}
        {...props}
      />
    );
  };

  test("debe mostrar el nombre, modelo y almacenamiento del dispositivo", () => {
    renderComponent();

    expect(screen.getByText(mockDevice.name)).toBeInTheDocument();
    expect(screen.getByText(`Modelo: ${mockDevice.model}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Almacenamiento: ${mockDevice.storage}`)
    ).toBeInTheDocument();
  });

  test("debe llamar a la función de edición al hacer clic en el botón de editar", () => {
    renderComponent();

    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);

    expect(mockEditItem).toHaveBeenCalled();
  });
});
