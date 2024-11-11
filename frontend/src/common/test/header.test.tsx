import { render, screen } from "@testing-library/react";

import useHeader from "../hooks/useHeader";
import Header from "../components/Header";

jest.mock("../hooks/useHeader");

describe("Header", () => {
  test("debe mostrar el nombre de usuario, ubicación y nombre de usuario correctamente", () => {
    (useHeader as jest.Mock).mockReturnValue({
      user: {
        name: "Juan Pérez",
        location: "Bogotá",
        username: "juanperez123",
      },
    });

    render(<Header />);
    expect(screen.getByText("Juan Pérez")).toBeInTheDocument();
    expect(screen.getByText("Bogotá - juanperez123")).toBeInTheDocument();
  });
});
