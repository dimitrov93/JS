import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/dimitrovtsvetomir/",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/dimitrov93",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/tsvetomir-dimitrov-921678238/",
  },
];
interface socialMediItem {
  icon: React.ReactNode;
  href: string;
}

export default function SocialMedia() {
  return (
    <div className="flex text-4xl lg:text-5xl gap-4 justify-center">
      {socialMediaLinks.map((link: socialMediItem, index: number) => (
        <Link
          key={index}
          className="text-white/90 hover:text-white hover:translate-y-1"
          href={link.href}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
