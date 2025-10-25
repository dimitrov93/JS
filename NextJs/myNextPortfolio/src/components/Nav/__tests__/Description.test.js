import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Description from '../Description'

describe("Home", () => {
  it("Renders Description with text \'Tsvetomir Dimitrov \'", () => {
    render(<Description />)
    const element = screen.getByText('Tsvetomir Dimitrov');
    const element2 = screen.getByText('Front-end / Full-stack developer');

    expect(element).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
  });
});
