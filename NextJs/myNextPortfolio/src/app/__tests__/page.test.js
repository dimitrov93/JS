import "@testing-library/jest-dom";
/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  it("Renders heading with \'Hello there\'", () => {
    render(<Home />)
    const helloElement = screen.getByText('Hello there!');

    expect(helloElement).toBeInTheDocument()
  });
});
