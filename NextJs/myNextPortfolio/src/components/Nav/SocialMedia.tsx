import Link from "next/link";
import { socialMediaLinks } from "@/utils/navBarLinks";


export default function SocialMedia() {
  return (
    <div className="flex text-4xl lg:text-5xl gap-4 justify-center">
      {socialMediaLinks.map((link, index) => (
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
