"use client";

import { Uebung } from "@/types/uebung";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface UebungenProps {
  value: string;
}

export default function Uebungen({ value }: UebungenProps) {
  const [uebungIndex, setUebungIndex] = useState(0);
  const [uebung, setUebung] = useState<Uebung[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUebung = async () => {
    try {
      const response = await fetch(`/api/uebungen?myProp=${value}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = (await response.json()) as Uebung[];
      setUebung(data);
    } catch (err) {
      console.log("Failed to load data", err);
      setError("Failed to load data");
    }
  };

  useEffect(() => {
    getUebung();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!uebung || uebung.length === 0) {
    return <div>Keine Übung vorhanden</div>;
  }

  const singleUebung = uebung[uebungIndex];

  const getBack = () => {
    setUebungIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : uebung.length - 1
    );
  };

  const getForwards = () => {
    setUebungIndex((prevIndex) =>
      prevIndex < uebung.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="h-full w-full">
        <div className=" flex justify-center items-center h-1/6 ">
          <h1 className="text-5xl text-white">{singleUebung.ziel}</h1>
          <Link className=" bg-red-600 rounded-lg px-1 py-1 ml-10" href="/">
            Zurück zur Infografik
          </Link>
        </div>
        <div className="flex justify-center h-5/6 items-center">
          <button onClick={getBack}>
            <Image
              src="/images/gympro-pfeil-Slide.png"
              alt="pfeilLinks"
              width={50}
              height={50}
            />
          </button>
          <div className="rounded-lg border border-[#00FF57] border-opacity-25 w-2/3 h-3/4 flex space-evenly bg-[#121E0F] p-5 w-vw">
            <div className="w-1/2">
              <div className="h-1/4 flex justify-center items-center text-white ">
                <h1 className="text-4xl">{singleUebung.name}</h1>
              </div>
              <div className=" w-vw h-3/4 flex justify-center items-center">
                <Image
                  src={singleUebung.path}
                  alt="uebung"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-1/4 flex justify-center items-center text-white ">
                <h2 className="text-4xl">Ausführung</h2>
              </div>
              <div className="w-vw h-3/4  justify-center overflow-y-auto custom-scrollbar">
                <h2 className="text-lg px-2 py-1 rounded-lg m-2 bg-[#00FF57]">
                  1. {singleUebung.description1}
                </h2>
                <h2 className="text-lg px-2 py-1 rounded-lg m-2 bg-[#00FF57]">
                  2. {singleUebung.description2}
                </h2>
                <h2 className="text-lg px-2 py-1 rounded-lg m-2 bg-[#00FF57]">
                  3. {singleUebung.description3}
                </h2>
                <h2 className="text-lg px-2 py-1 rounded-lg m-2 bg-[#00FF57]">
                  4. {singleUebung.description4}
                </h2>
              </div>
            </div>
          </div>
          <button onClick={getForwards}>
            <Image
              src="/images/gympro-pfeil-Slide.png"
              alt="pfeilRechts"
              width={50}
              height={50}
              className="transform rotate-180"
            />
          </button>
        </div>
      </div>
    </>
  );
}
