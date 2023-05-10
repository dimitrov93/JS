"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname().split("/");
  const currentArea = pathname[2];
  const recipeId = pathname[3];

  return (
    <div className="py-5 bg-slate-400 flex items-center justify-between px-2">
      <div>
        <Link href="/">
          <h1 className=" text-blue-700 font-bold text-center text-5xl">
            Food
          </h1>
        </Link>
      </div>
      {pathname && currentArea && (
        <Link className=" bg-blue-500 p-4 text-xs rounded font-bold text-white" href={recipeId ? `/types/${currentArea}` : `/types`}>
          Back to {recipeId ? `${currentArea} recipes` : "recepe type"}
        </Link>
      )}
    </div>
  );
};

export default Header;
