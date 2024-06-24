"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./../app/globals.css";

export default function Infografik() {
  return (
    <div className="flex justify-center transform scale-75">
      <div className="flex flex-col justify-end">
        <button>
          <Link href={{ pathname: "/uebungenPage", query: { myProp: "arme" } }}>
            <Image
              src="/images/InfografikBilder/ManVorne/LinkerarmNeu.png"
              alt="infografik"
              width={78}
              height={280}
              className="mb-[355%] transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </button>
      </div>

      <div className="flex flex-col items-center justify-between">
        <Image
          src="/images/InfografikBilder/ManVorne/KopfVorneNeu.png"
          alt="infografik"
          width={124}
          height={109}
          className=" transform transition-transform duration-300 hover:scale-110"
        />

        <Link
          href={{ pathname: "/uebungenPage", query: { myProp: "schultern" } }}
        >
          <Image
            src="/images/InfografikBilder/ManVorne/SchulternNeu.png"
            alt="infografik"
            width={124}
            height={46}
            className=" transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "brust" } }}>
          <Image
            src="/images/InfografikBilder/ManVorne/BrustNeu.png"
            alt="infografik"
            width={124}
            height={85}
            className=" transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "bauch" } }}>
          <Image
            src="/images/InfografikBilder/ManVorne/BauchNeu.png"
            alt="infografik"
            width={124}
            height={85}
            className=" transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "beine" } }}>
          <Image
            src="/images/InfografikBilder/ManVorne/BeineVorneNeu.png"
            alt="infografik"
            width={124}
            height={359}
            className=" transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-end">
        <Link href={{ pathname: "/uebungenPage", query: { myProp: "arme" } }}>
          <Image
            src="/images/InfografikBilder/ManVorne/RechterArmNeu.png"
            alt="infografik"
            width={78}
            height={280}
            className="mb-[355%] transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
