import { useAuth } from "@/components/AuthContext";
import "./../app/globals.css";
import { Workout } from "@/types/workout";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateWorkoutBtn from "@/components/CreateWorkoutBtn";
import DownloadPDF from "./DownloadPDF";
import SearchWorkouts from "./serchWorkout";
import MyPaceBtn from "./MyPaceBtn";
import DeleteWorkout from "./DeleteWorkouts";

export default function CommunityPageLoggedIn() {
  const { username } = useAuth();
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMyPace, setIsMyPace] = useState(false);

  const getWorkoutsLoggedIn = async () => {
    try {
      const response = await fetch(`/api/workoutsLoggedIn`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = (await response.json()) as Workout[];
      setWorkouts(data);
      setFilteredWorkouts(data);
    } catch (err) {
      console.log("Failed to load data", err);
      setError("Failed to load data");
    }
  };

  const fetchAndFilterWorkouts = async (
    filterFunc: (workout: Workout) => boolean
  ) => {
    try {
      const response = await fetch(`/api/workoutsLoggedIn`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = (await response.json()) as Workout[];
      setWorkouts(data);
      setFilteredWorkouts(data.filter(filterFunc));
    } catch (err) {
      console.log("Failed to load data", err);
      setError("Failed to load data");
    }
  };

  const handleDelete = (id: string) => {
    setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    setFilteredWorkouts((prev) => prev.filter((workout) => workout.id !== id));
  };

  useEffect(() => {
    getWorkoutsLoggedIn();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!workouts.length) {
    return <div>Loading...</div>;
  }

  const singleWorkout = filteredWorkouts[workoutIndex];

  const getBack = () => {
    setWorkoutIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : filteredWorkouts.length - 1
    );
  };

  const getForwards = () => {
    setWorkoutIndex((prevIndex) =>
      prevIndex < filteredWorkouts.length - 1 ? prevIndex + 1 : 0
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
    isMyPace,
    username,
  }: {
    workout: Workout;
    getBack: () => void;
    getForwards: () => void;
    isMyPace: boolean;
    username: string | null;
  }) => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full h-full text-white flex items-center justify-center">
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
                <p className=" text-blue-600 ml-4 border border-blue-600 rounded-lg px-2 py-0.5">
                  {workout.created}
                </p>
              </div>
              <div className="flex">
                <DownloadPDF workout={workout} />
                {isMyPace && workout.created === username && (
                  <DeleteWorkout workout={workout} onDelete={handleDelete} />
                )}
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
          <p className="text-2xl font-semibold font-Oswald ">
            Welcome to the community!
          </p>
          <p className=" ml-2 text-blue-600 text-2xl font-semibold font-Oswald ">
            {username}
          </p>
        </div>
        <div className="w-full h-5/6 text-white items-center justify-center">
          <div className="flex w-full justify-between items-center px-2 py-2 border border-green-600 rounded-lg box-shadow-black-color">
            <SearchWorkouts
              refreshWorkouts={getWorkoutsLoggedIn}
              onSearchResults={setFilteredWorkouts}
              isMyPace={isMyPace}
              setIsMyPace={setIsMyPace}
              username={username}
            />
            <MyPaceBtn
              isMyPace={isMyPace}
              setIsMyPace={setIsMyPace}
              onSearchResults={setFilteredWorkouts}
              fetchAndFilterWorkouts={fetchAndFilterWorkouts}
              workouts={workouts}
              username={username}
            />
            <CreateWorkoutBtn
              refreshWorkouts={getWorkoutsLoggedIn}
              handleMyPace={() => {
                setIsMyPace(true);
                fetchAndFilterWorkouts(
                  (workout) => workout.created === username
                );
              }}
              disabled={!isMyPace}
            />
          </div>
          {singleWorkout && (
            <WorkoutDisplay
              workout={singleWorkout}
              getBack={getBack}
              getForwards={getForwards}
              isMyPace={isMyPace}
              username={username}
            />
          )}
        </div>
      </div>
    </div>
  );
}
