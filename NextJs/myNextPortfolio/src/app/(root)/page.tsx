import Image from "next/image";
import { homePageTitle, homePage } from "../../data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-3/4 container mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2 bg-slate-600 shadow-lg rounded-lg">
          <Image
            src={"/Images/3.jpg"}
            width={500}
            height={500}
            alt="Picture"
            className="w-full h-full rounded-lg transform duration-300 ease-in-out rotate-[10deg] hover:rotate-0 mx-auto  "
          />
        </div>
        <div className="lg:col-span-3">
          <div className="flex gap-4 items-center justify-center">
            {homePageTitle.map((item, index) => (
              <span
                key={index}
                className="p-6 border-slate-600 border-4 rounded-md  hover:bg-slate-600 hover:text-white hover:cursor-pointer "
              >
                {item}
              </span>
            ))}
          </div>

          {homePage.map((title, index) => (
            <p className="mt-4 text-lg" key={index}>
              {title.title}
            </p>
          ))}

          <div className="mt-4 w-1/6 text-center p-2 sm:mx-0 mx-auto border-slate-600 border-4 rounded-md  hover:bg-slate-600 hover:text-white hover:cursor-pointer ">
            <Link href={"/contacts"}>Lets talk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
