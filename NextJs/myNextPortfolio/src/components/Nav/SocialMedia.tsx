import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex justify-center text-4xl lg:text-5xl gap-4">
    <Link className="text-white/90 hover:text-white" href="/">
      <FaFacebook />
    </Link>
    <Link
      className="text-white/90 hover:text-white"
      href="https://github.com/dimitrov93"
    >
      <FaGithub />
    </Link>
    <Link className="text-white/90 hover:text-white" href="/">
      <FaLinkedin />
    </Link>
  </div>
  )
}
