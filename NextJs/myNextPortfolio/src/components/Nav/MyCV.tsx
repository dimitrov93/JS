import Link from "next/link";

const CV = "/assets/cv.pdf";

export default function MyCV() {
  return (
    <div className="border-2 rounded-md py-1 px-2 text-white/90 hover:text-white">
      <Link
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        locale={false}
        download
      >
        Download Here
      </Link>
    </div>
  );
}
