"use client"; // Mark this component as a Client Component

import { useSearchParams } from "next/navigation";
import Uebungen from "@/components/Uebungen";

export default function UebungPage() {
  const searchParams = useSearchParams();
  const myProp = searchParams.get("myProp");

  return (
    <main className="w-full h-[calc(100svh-0rem)] flex justify-center items-center bg-[#17181C]">
      <Uebungen value={myProp as string} />
    </main>
  );
}
