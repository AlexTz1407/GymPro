import Infografik from "./../components/Infografik";
import InfografikHinten from "./../components/InfografikHinten";

export default function InfoGrafik() {
  return (
    <>
      <div className="w-full h-[calc(100svh-0rem)] p-10 bg-[#17181C] flex flex-col items-center">
        <h1 className="text-4xl text-white font-comfortaa mb-[5%] text-shadow-blue">
          Wähle den Bereich aus, den du trainieren willst!
        </h1>
        <div className="flex justify-center space-x-10">
          <Infografik />
          <InfografikHinten />
        </div>
      </div>
    </>
  );
}
