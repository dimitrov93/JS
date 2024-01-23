"use client";

import { useState } from "react";
import Image from "next/image";

export default function MyProfilePic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
        src={isHovered ? "/Images/2.png" : "/Images/1.jpg"}
        width={200}
        height={200}
        alt="Tsvetomir Dimitrov"
        priority={true}
      />
    </div>
  );
}
