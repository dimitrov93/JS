import React from "react";

interface ButtonProps {
  text: string;
}

export default function PrimaryButton({ text }: ButtonProps) {
  return (
    <button
      type="submit"
      className="mt-4 place-self-end border border-slate-600 px-8 py-2 rounded-md bg-slate-600 text-white hover:bg-white hover:text-slate-600"
    >
      {text}
    </button>
  );
}
