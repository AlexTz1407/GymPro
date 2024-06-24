import { useEffect, useState } from "react";
import { Workout } from "@/types/workout";
import Image from "next/image";
import DownloadPDF from "./DownloadPDF";
import LoginBtn from "./LoginBtn";
import "./../app/globals.css";

export default function CommunityPageFree() {
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("###fetching workouts");
        const response = await fetch(`/api/workoutsFree`);
        console.log("###fetching workouts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as Workout[];
        console.log(data, "dataFree");
        setWorkouts(data);
      } catch (err) {
        console.log("Failed to load data", err);
        setError("Failed to load data");
      }
    };

    if (!workouts) {
      fetchData();
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!workouts || workouts.length === 0) {
    return <div>No workouts available</div>;
  }

  const singleWorkout = workouts[workoutIndex];

  const getBack = () => {
    setWorkoutIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : (workouts?.length ?? 1) - 1
    );
  };

  const getForwards = () => {
    setWorkoutIndex((prevIndex) =>
      prevIndex < (workouts?.length ?? 1) - 1 ? prevIndex + 1 : 0
    );
  };

  const WeekDayBox = ({ day, plan }: { day: string; plan: string }) => (
    <div className="w-1/6 h-full border border-[#00FF57] border-opacity-25 rounded-lg flex flex-col transform transition-transform hover:scale-105 bg-[#1C1F24] shadow-lg">
      <div className="flex justify-center items-center bg-gradient-to-r from-green-500 to-green-700 text-white rounded-tl-lg rounded-tr-lg h-1/3">
        {day}
      </div>
      <div className="flex justify-center items-center h-2/3">
        <p className="text-center font-Oswald text-sm">{plan}</p>
      </div>
    </div>
  );

  const WorkoutDisplay = ({
    workout,
    getBack,
    getForwards,
  }: {
    workout: Workout;
    getBack: () => void;
    getForwards: () => void;
  }) => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full h-full text-white flex items-center justify-center ">
        <button onClick={getBack} className="mx-4">
          <Image
            src="/images/gympro-pfeil-Slide.png"
            alt="pfeilLinks"
            width={50}
            height={50}
            className="transition-transform transform hover:scale-110"
          />
        </button>
        <div
          id="workout-display"
          className="w-5/6 h-5/6 border-t border-l border-r border-[#00FF57] border-opacity-25 rounded-lg flex flex-col items-center justify-center bg-[#1C1F24] shadow-xl p-4"
        >
          <div className="h-2/3 w-full">
            <div className=" flex justify-between h-1/3 w-full items-center ">
              <div className="flex items-center">
                <p className="text-4xl font-semibold flex items-center">
                  {workout.name}
                </p>
                <p className="text-blue-600 ml-4 border border-blue-600 rounded-lg px-2 py-0.5">
                  {workout.created}
                </p>
              </div>
              <div className="flex">
                <DownloadPDF workout={workout} />
              </div>
            </div>
            <div className="justify-center h-2/3 p-4 font-Oswald overflow-y-auto custom-scrollbar">
              <h3>Beschreibung:</h3>
              <p>{workout.beschreibung}</p>
            </div>
          </div>
          <div className="h-1/3 flex justify-evenly p-2 w-full">
            <WeekDayBox day="Mo" plan={workout.trainingsplanMontag} />
            <WeekDayBox day="Di" plan={workout.trainingsplanDienstag} />
            <WeekDayBox day="Mi" plan={workout.trainingsplanMittwoch} />
            <WeekDayBox day="Do" plan={workout.trainingsplanDonnerstag} />
            <WeekDayBox day="Fr" plan={workout.trainingsplanFreitag} />
            <WeekDayBox day="Sa" plan={workout.trainingsplanSamstag} />
            <WeekDayBox day="So" plan={workout.trainingsplanSonntag} />
          </div>
        </div>
        <button onClick={getForwards} className="mx-4">
          <Image
            src="/images/gympro-pfeil-Slide.png"
            alt="pfeilRechts"
            width={50}
            height={50}
            className="transform rotate-180 transition-transform transform hover:scale-110"
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-[calc(100svh-0rem)] flex flex-col items-center justify-center bg-[#17181C] p-4">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="h-1/6 w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg mb-4">
          <p className="text-2xl font-semibold pr-5 font-Oswald">
            Please log in to share your training plans with friends!
          </p>
          <LoginBtn textSize="text-1xl" />
        </div>
        <div className="w-full h-5/6 text-white items-center justify-center">
          {singleWorkout && (
            <WorkoutDisplay
              workout={singleWorkout}
              getBack={getBack}
              getForwards={getForwards}
            />
          )}
        </div>
      </div>
    </div>
  );
}
