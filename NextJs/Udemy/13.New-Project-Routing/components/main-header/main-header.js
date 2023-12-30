import Image from "next/image";
import Link from "next/link";
import classess from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classess.header}>
        <Link className={classess.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" />
          Next level food{" "}
        </Link>

        <nav className={classess.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
