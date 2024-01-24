import { navItemLinks } from "@/utils/navBarLinks";
import Link from "next/link";

interface NavItem {
  title: string;
  href: string;
}

export default function NavBarList() {
  return (
    <ul className="flex flex-row sm:gap-4 gap-2 justify-center">
      {navItemLinks.map((item: NavItem, index: number) => (
        <li
          key={index}
          className="text-white/90 hover:text-white hover:cursor-pointer"
        >
          <Link href={item.href} passHref>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
