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
        className="border-2 border-white/90 drop-shadow-xl rounded-full"
        src={isHovered ? "/Images/2.png" : "/Images/1.jpg"}
        width={200}
        height={200}
        alt="MyProfilePicture"
        priority={true}
      />
    </div>
  );
}
