import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Not found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg">Could not find the requested resource</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
