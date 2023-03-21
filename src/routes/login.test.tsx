import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ModuleNode } from "vite";

import Login from "./login";

const navigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<ModuleNode>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigate,
  };
});

describe("Login", () => {
  it("renders greetings", () => {
    render(<Login />, { wrapper: BrowserRouter });
    expect(screen.getByText("Bienvenue !")).toBeInTheDocument();
  });

  it("renders inputs", () => {
    render(<Login />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
  });

  it("renders log in button", () => {
    render(<Login />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("button", { name: "Se connecter" })
    ).toBeInTheDocument();
  });

  it("enables submit button when inputs are not empty", () => {
    render(<Login />, { wrapper: BrowserRouter });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "johndoe@mail.com" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "abcdefghijk" },
    });
    expect(screen.getByRole("button", { name: "Se connecter" })).toBeEnabled();
  });
});
