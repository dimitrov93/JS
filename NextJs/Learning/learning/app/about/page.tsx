import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <div>About</div>
      <Link href={`/`} className=" text-red-400 hover:text-red-200">Link back to home page</Link>
    </>
  );
}
