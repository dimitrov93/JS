import Link from "next/link";

export default function Description() {
  return (
    <h1 className="text-3xl font-bold text-white">
      <Link href="/" className="text-white/90 no-underline hover:text-white">
        Tsvetomir Dimitrov
      </Link>
    </h1>
  );
}
