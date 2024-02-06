import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const leftSide = [
  {
    title: "Facebook",
    icon: <FaFacebook size={50} />,
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={50} />,
  },
  {
    title: "Email",
    icon: <MdOutlineEmail size={50} />,
  },
];

export default function Contacts() {
  return (
    <>
      <div className=" container shadow-lg mx-auto grid md:grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 relative">
          <Image
            src={"/Images/contact.png"}
            alt="contact me image"
            fill={true}
          />
        </div>

        <div className="col-span-2  my-auto  p-6">
          <div className="flex flex-col gap-16 my-auto">
            <h1 className="text-5xl text-center">Send me a message</h1>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-4 shadow-xl focus:outline-none"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="p-4 shadow-lg focus:outline-none"
              />
              <textarea
                placeholder="Enter your message"
                className="p-4 shadow-lg h-3/4 focus:outline-none"
              />
            </div>

            <button className="place-self-end border border-slate-600 px-8 py-2 rounded-md bg-slate-600 text-white hover:bg-white hover:text-slate-600">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto mt-6">
        <div className="grid grid-cols-3 gap-5 border-2">
          
          <div className="leftSide  space-y-2 col-span-1  ">
            {leftSide.map((item, index) => (
              <div
                key={index}
                className="p-20 border-2 border-slate-500 rounded-md w-full flex justify-center flex-col items-center"
              >
                {item.icon}
                {item.title}
              </div>
            ))}
          </div>


          <div className="rightSide cols-span-2 bg-slate-400 w-full">
            <h1 className="text-5xl">Send me a message</h1>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-4 border-2"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="p-4"
              />
              <input
                type="text"
                placeholder="Enter your message"
                className="p-4"
              />
            </div>

            <div className="p-6 bottom-2 border-cyan-500">Button</div>
          </div>
        </div>
      </div> */}
    </>
  );
}
