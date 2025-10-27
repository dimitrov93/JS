import { render, screen, fireEvent } from "@testing-library/react";
import MyProfilePic from "../MyProfilePic";

describe("MyProfilePic component", () => {
  it("renders the component with the default image", () => {
    render(<MyProfilePic />);

    const defaultImage = screen.getByAltText("MyProfilePicture");
    expect(defaultImage).toBeInTheDocument()
    expect(defaultImage.alt).toBe('MyProfilePicture');
  });

  it('changes the image on hover', () => {
    render(<MyProfilePic />);

    const profilePic = screen.getByAltText('MyProfilePicture');
    fireEvent.mouseEnter(profilePic);
    
    const hoveredImage = screen.getByAltText('MyProfilePicture');
    expect(hoveredImage.src).toContain('2.png');

    fireEvent.mouseLeave(profilePic);

    const defaultImage = screen.getByAltText('MyProfilePicture');
    expect(defaultImage.src).toContain('1.jpg');
  });
});
