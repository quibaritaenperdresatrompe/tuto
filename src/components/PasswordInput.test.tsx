import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  it("hides password", () => {
    render(<PasswordInput />);
    expect(screen.getByTestId("password-input")).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("displays password", () => {
    render(<PasswordInput value="abcdefghijk" />);
    fireEvent.click(screen.getByTestId("toggle-visibility-button"));
    expect(screen.getByTestId("password-input")).toHaveAttribute(
      "type",
      "text"
    );
  });
});
