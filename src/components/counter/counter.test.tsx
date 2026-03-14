import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders initially with count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments count when + is clicked", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("+"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements count when - button is clicked", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("-"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements does not work if count = 0", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("-"));
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
