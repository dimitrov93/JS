import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe('NavBar component', () => {
  it('renders NavBar with MyProfilePic, Description, and SocialMedia components', () => {
    render(<NavBar />);

    const profilePicElement = screen.getByAltText('MyProfilePicture');
    expect(profilePicElement).toBeInTheDocument();

    const descriptionElement = screen.getByText('Tsvetomir Dimitrov');
    expect(descriptionElement).toBeInTheDocument();

    const socialMediaLinksElement = screen.getByRole('navigation');
    expect(socialMediaLinksElement).toBeInTheDocument();
  });
});
