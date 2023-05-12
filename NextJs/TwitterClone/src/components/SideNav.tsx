import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const seassion = useSession();
  const user = seassion.data?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>Profile</Link>
          </li>
        )}
        {user == null ? (
          <li>
            <button onClick={() => void signIn()}>Sign in</button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signOut()}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
