import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  it("renders initially with count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
