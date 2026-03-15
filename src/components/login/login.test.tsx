import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./login";
import userEvent from "@testing-library/user-event";

describe("Login", () => {
  it("renders initially with empty fields", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText("email-input") as HTMLInputElement;
    const passwordInput = screen.getByLabelText(
      "password-input",
    ) as HTMLInputElement;
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  it("fails to submit with empty fields", async () => {
    render(<Login />);
    await userEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText("Incomplete fields")).toBeInTheDocument();
  });

  it("succeeds to submit with complete fields", async () => {
    render(<Login />);
    const emailInput = screen.getByLabelText("email-input") as HTMLInputElement;
    const passwordInput = screen.getByLabelText(
      "password-input",
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "my-pass" } });
    await userEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText("Success!")).toBeInTheDocument();
  });
});
