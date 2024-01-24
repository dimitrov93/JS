import Link from "next/link";

export default function Description() {
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold text-white justify-center">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
          Tsvetomir Dimitrov
        </Link>
      </h1>
      <h6 className=" text-white/90">
        Front-end / Full-stack developer
      </h6>
    </>
  );
}
