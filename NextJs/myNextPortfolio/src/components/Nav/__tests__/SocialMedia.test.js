import { render, screen } from "@testing-library/react";
import SocialMedia from "../SocialMedia";
import { socialMediaLinks } from "@/utils/navBarLinks";

describe("Social Media component", () => {
  it("renders the social media component", () => {
    render(<SocialMedia />);

    const socialMediaElements = screen.getAllByRole("link");

    expect(socialMediaElements.length).toBe(socialMediaLinks.length);

    socialMediaLinks.forEach((link, index) => {
      expect(socialMediaElements[index]).toHaveAttribute("href", link.href);
    });
  });
});
