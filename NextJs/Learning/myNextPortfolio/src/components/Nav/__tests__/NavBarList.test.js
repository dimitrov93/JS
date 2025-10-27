import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBarList from "../NavBarList";
import { navItemLinks } from "../../../utils/navBarLinks";

describe("NavBarList", () => {
  it("Renders the proper navigation list items", () => {
    render(<NavBarList />);
    const navBarLinksContainer = screen.getByRole("list");
    const navBarLinksLength = screen.getAllByRole("link");

    const homeLink = screen.getByText("Home");
    const contactsLink = screen.getByText("Contacts");

    expect(navBarLinksContainer).toBeInTheDocument();
    expect(navBarLinksContainer).toContainElement(homeLink);
    expect(navBarLinksContainer).toContainElement(contactsLink);
    expect(navBarLinksLength.length).toBe(navItemLinks.length);
  });
});
