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
      <h2 className="mx-auto text-center text-lx">Get In Touch</h2>
      <h1 className="mx-auto text-center text-4xl	">Contact Me</h1>

      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-5 gap-5 border-2">
          <div className="leftSide  space-y-2 col-span-2 ">
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

          <div className="h-96 my-auto border-2 border-slate-500 w-0"></div>

          <div className="rightSide cols-span-3 w-full ">
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
      </div>
    </>
  );
}
