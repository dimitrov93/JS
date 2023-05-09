"use client"

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 bg-slate-400">
      <div>
        <Link href="/">
          <h1 className=" text-blue-700 font-bold text-center text-5xl">
            Food
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
