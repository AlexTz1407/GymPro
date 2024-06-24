import React from "react";
import { Workout } from "@/types/workout";

interface MyPaceBtnProps {
  isMyPace: boolean;
  setIsMyPace: (value: boolean) => void;
  onSearchResults: (results: Workout[]) => void;
  fetchAndFilterWorkouts: (filterFunc: (workout: Workout) => boolean) => void;
  workouts: Workout[];
  username: string | null;
}

const MyPaceBtn: React.FC<MyPaceBtnProps> = ({
  isMyPace,
  setIsMyPace,
  onSearchResults,
  fetchAndFilterWorkouts,
  workouts,
  username,
}) => {
  const handleMyPace = async () => {
    const newValue = !isMyPace;
    console.log("isMyPace", newValue);
    setIsMyPace(newValue);
    if (newValue && username) {
      await fetchAndFilterWorkouts((workout) => workout.created === username);
    } else {
      await fetchAndFilterWorkouts(() => true);
    }
  };

  return (
    <div className="w-1/3 flex justify-center">
      <button
        onClick={handleMyPace}
        className="border rounded-lg px-4 py-1 hover:bg-[#00FF57] hover:text-black"
      >
        {isMyPace ? "Alle Workouts" : "Mein Bereich"}
      </button>
    </div>
  );
};

export default MyPaceBtn;
