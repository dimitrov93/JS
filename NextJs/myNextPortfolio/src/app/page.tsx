import Link from "next/link";
import MyProfilePic from "../components/Nav/MyProfilePic";
import SocialMedia from "@/components/Nav/SocialMedia";

export default function Home() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="flex flex-row justify-center">
        <MyProfilePic />
        <div className="my-auto ml-4 text-center">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            <Link
              href="/"
              className="text-white/90 no-underline hover:text-white"
            >
              Tsvetomir Dimitrov
            </Link>
          </h1>
          <SocialMedia />
        </div>
      </div>
    </nav>
  );
}
