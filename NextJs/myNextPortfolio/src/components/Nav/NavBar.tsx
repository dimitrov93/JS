import MyProfilePic from "./MyProfilePic";
import SocialMedia from "./SocialMedia";
import Description from "./Description";
import NavBarList from "./NavBarList";
import MyCV from "./MyCV";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <MyProfilePic />
        <div className="flex flex-col gap-2 sm:ml-4 justify-center items-center">
          <Description />
          <SocialMedia />
          <NavBarList />
          <MyCV />
        </div>
      </div>
    </nav>
  );
}
