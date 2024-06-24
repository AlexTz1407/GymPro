import React, { useState } from "react";
import { Workout } from "@/types/workout";
import "./../app/globals.css";

interface SearchWorkoutsProps {
  refreshWorkouts: () => void;
  onSearchResults: (results: Workout[]) => void;
  isMyPace: boolean;
  setIsMyPace: (value: boolean) => void;
  username: string | null;
}

const SearchWorkouts: React.FC<SearchWorkoutsProps> = ({
  refreshWorkouts,
  onSearchResults,
  isMyPace,
  setIsMyPace,
  username,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/workoutsLoggedIn`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const workouts = (await response.json()) as Workout[];
      const results = workouts.filter(
        (workout) =>
          workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          workout.beschreibung
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          workout.created.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearchResults(results);
    } catch (error) {
      console.error("Failed to search workouts", error);
    }
  };

  return (
    <div className="w-1/3 flex items-center justify-center font-Bebas">
      <div className="flex items-center">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for workouts"
            className="font-Oswald text-white border bg-transparent border-black rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            disabled={isMyPace}
          />
          <button
            type="submit"
            className="ml-2 bg-green-600 text-white rounded-md px-4 py-1"
            disabled={isMyPace}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchWorkouts;
