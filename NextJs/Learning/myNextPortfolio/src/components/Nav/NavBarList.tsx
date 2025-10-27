import Link from "next/link";
interface NavItem {
  title: string;
  href: string;
}

 const navItemLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Certificates",
    href: "/certificates",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];

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
