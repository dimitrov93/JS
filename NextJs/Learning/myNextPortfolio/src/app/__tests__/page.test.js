import "@testing-library/jest-dom";
/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../page";
import { homePageTitle, homePage } from "../../data";

describe("Home", () => {
  it("Renders home page with picture'", () => {
    render(<Home />);
    const picture = screen.getByAltText("Picture");
    expect(picture).toBeInTheDocument();
    expect(picture.alt).toBe("Picture");
  });

  it("renders home page titles", () => {
    render(<Home />);
    homePageTitle.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders home page content", () => {
    render(<Home />);
    homePage.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  it("links to /contacts", () => {
    render(<Home />);
    const link = screen.getByText("Lets talk");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/contacts");
  });
});
