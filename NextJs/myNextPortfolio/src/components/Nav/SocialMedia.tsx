import Link from "next/link";
import { socialMediaLinks } from "@/utils/socialMediaLinks";

export default function SocialMedia() {
  return (
    <div className="flex justify-center text-4xl lg:text-5xl gap-4">
      {socialMediaLinks.map((link, index) => (
        <Link
          key={index}
          className="text-white/90 hover:text-white"
          href={link.href}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
