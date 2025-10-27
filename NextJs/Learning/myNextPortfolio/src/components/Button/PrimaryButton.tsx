import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
}

export default function PrimaryButton({ text, href }: ButtonProps) {
  const btnClass =
    "mt-4 place-self-end border border-slate-600 px-8 py-2 rounded-md bg-slate-600 text-white hover:bg-white hover:text-slate-600";

  if (href)
    return (
      <Link href={`${href}`} className={btnClass}>
        {text}
      </Link>
    );

  return (
    <button type="submit" className={btnClass}>
      {text}
    </button>
  );
}
