"use client";

import Link from "next/link";
import Image from "next/image";
import LoginBtn from "@/components/LoginBtn";

export default function Navbar() {
  return (
    <nav className="w-vw h-10 bg-[#17181C] flex justify-between items-center p-2">
      <div className="flex">
        <Link href="/">
          <Image
            src="/images/gympro-logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <h3 className="text-white text-2xl">Gym</h3>
        <h3 className="text-2xl" style={{ color: "#00FF57" }}>
          Pro
        </h3>
      </div>
      <LoginBtn textSize="text-1xl" />
    </nav>
  );
}
