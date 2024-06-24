"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginBtn from "@/components/LoginBtn";
import "./../app/globals.css";

export default function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div
        className="w-full h-screen bg-blue-300 bg-cover bg-center items-center flex p-6"
        style={{ backgroundImage: "url('/images/gympro-hero.jpg')" }}
      >
        <div className="w-vw">
          <h1 className="text-8xl text-white w-1/2 font-bebas">
            Beweg dich <br />
            in eine gesündere Zukunft!
          </h1>
          <br />

          <LoginBtn textSize="text-5xl" />
        </div>
        <div className="absolute bottom-0 w-full p-6 flex justify-center">
          <div className="">
            <Image
              src="/images/gympro-pfeil.png"
              alt="pfeil"
              width={100}
              height={100}
              className="arrow"
            />
            <Image
              src="/images/gympro-pfeil.png"
              alt="pfeil"
              width={100}
              height={100}
              className="arrow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
