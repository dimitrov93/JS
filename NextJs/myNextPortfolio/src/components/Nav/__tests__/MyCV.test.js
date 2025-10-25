import { render, screen, fireEvent } from "@testing-library/react";
import MyCV from "../MyCV";

describe("NavBarList", () => {
  it("Renders MyCV component correctly", () => {
    render(<MyCV />);

    const downloadLinkButton = screen.getByText("Download CV");
    expect(downloadLinkButton).toBeInTheDocument();
    expect(downloadLinkButton).toHaveAttribute("href", "/assets/cv.pdf");
    expect(downloadLinkButton).toHaveAttribute("target", "_blank");
    expect(downloadLinkButton).toHaveAttribute("rel", "noopener noreferrer");
    expect(downloadLinkButton).toHaveAttribute("download", "");
  });

  it("fires the download event when clicked", () => {
    render(<MyCV />);

    const downloadLinkButton = screen.getByText("Download CV");

    expect(fireEvent.click(downloadLinkButton)).toBe(true);
  });
});
