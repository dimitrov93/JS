import MyProfilePic from "./MyProfilePic";
import SocialMedia from "./SocialMedia";
import Description from "./Description";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="flex flex-row justify-center">
        <MyProfilePic />
        <div className="flex flex-col justify-center gap-2 ml-4">
          <Description />
          <SocialMedia />
        </div>
      </div>
    </nav>
  );
}
