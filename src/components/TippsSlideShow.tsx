import React, { useEffect, useState } from "react";
import Image from "next/image";

interface TippsSlideShowProps {}

interface Tipp {
  id: number;
  text: string;
}

const TippsSlideShow: React.FC<TippsSlideShowProps> = () => {
  const [tipps, setTipps] = useState<Tipp[]>([]);
  const [currentTippIndex, setCurrentTippIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTipps = async () => {
      try {
        const response = await fetch("/api/TippsGet");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTipps(data);
      } catch (err) {
        console.error("Failed to load tipps", err);
        setError("Failed to load tipps");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTipps();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTippIndex((prevIndex) => (prevIndex + 1) % tipps.length);
    }, 7000); // 7 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [tipps.length]);

  const handleNextTipp = () => {
    setCurrentTippIndex((prevIndex) => (prevIndex + 1) % tipps.length);
  };

  const handlePreviousTipp = () => {
    setCurrentTippIndex(
      (prevIndex) => (prevIndex - 1 + tipps.length) % tipps.length
    );
  };

  if (isLoading) {
    return <div className="bg-[#1C1F24]">LoadingTipps...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tipps.length) {
    return <div>No tips available</div>;
  }

  return (
    <div className="w-full h-[calc(40svh-0rem)] bg-[#17181C] justify-center">
      <p className="h-2/6"></p>
      <h1 className="h-1/6 w-full flex justify-center text-[#00FF57] text-2xl">
        Tipps Fürs Training!
      </h1>
      <div className="h-2/6 w-full flex justify-evenly items-center">
        <button className="text-white" onClick={handlePreviousTipp}>
          <Image
            src="/images/gympro-pfeil-Slide.png"
            alt="pfeilLinks"
            width={50}
            height={50}
            className="transition-transform transform hover:scale-110"
          />
        </button>
        <div className=" w-5/6 h-5/6 bg-gradient-to-r from-green-500 to-green-700 border border-[#00FF57] border-opacity-25 rounded-lg flex flex-col items-center justify-center bg-[#1C1F24] shadow-xl p-4 border-animation">
          <p className="font-bold font-Oswald">
            {tipps[currentTippIndex].text}
          </p>
        </div>

        <button className="text-white" onClick={handleNextTipp}>
          <Image
            src="/images/gympro-pfeil-Slide.png"
            alt="pfeilRechts"
            width={50}
            height={50}
            className="transform rotate-180 transition-transform transform hover:scale-110"
          />
        </button>
      </div>
      <p className="h-1/6"></p>
    </div>
  );
};

export default TippsSlideShow;
