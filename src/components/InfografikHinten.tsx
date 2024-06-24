"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./../app/globals.css";

export default function InfografikHinten() {
  const handleButtonClick = (param: string) => {
    console.log("Button wurde gedrückt", param);
  };

  return (
    <div className="flex justify-center transform scale-75">
      <div className="flex flex-col justify-end">
        <button>
          <Link href={{ pathname: "/uebungenPage", query: { myProp: "arme" } }}>
            <Image
              src="/images/InfografikBilder/ManHinten/LinkerarmHinten.png"
              alt="infografik"
              width={78}
              height={280}
              className="h-[262.5px] mb-[375%] transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </button>
      </div>

      <div className="flex flex-col items-center justify-between">
        <Image
          src="/images/InfografikBilder/ManHinten/KopfHinten.png"
          alt="infografik"
          width={124}
          height={109}
          className="transform transition-transform duration-300 hover:scale-110"
        />

        <Link
          href={{ pathname: "/uebungenPage", query: { myProp: "schultern" } }}
        >
          <Image
            src="/images/InfografikBilder/ManHinten/SchulternHinten.png"
            alt="infografik"
            width={124}
            height={46}
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link
          href={{ pathname: "/uebungenPage", query: { myProp: "ruecken" } }}
        >
          <Image
            src="/images/InfografikBilder/ManHinten/Rücken.png"
            alt="infografik"
            width={124}
            height={152}
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "po" } }}>
          <Image
            src="/images/InfografikBilder/ManHinten/Po.png"
            alt="infografik"
            width={124}
            height={82}
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "beine" } }}>
          <Image
            src="/images/InfografikBilder/ManHinten/BeineHinten.png"
            alt="infografik"
            width={124}
            height={277}
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-end">
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "arme" } }}>
          <Image
            src="/images/InfografikBilder/ManHinten/RechterArmHinten.png"
            alt="infografik"
            width={78}
            height={280}
            className="h-[262.5px] mb-[375%] transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
