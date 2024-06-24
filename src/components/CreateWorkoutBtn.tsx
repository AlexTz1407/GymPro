"use client";

import { useState, useEffect } from "react";
import "./../app/globals.css";

interface CreateWorkoutBtnProps {
  refreshWorkouts: () => void;
  handleMyPace: () => void;
  disabled: boolean;
}

export default function CreateWorkoutBtn({
  refreshWorkouts,
  handleMyPace,
  disabled,
}: CreateWorkoutBtnProps) {
  const [showForm, setShowForm] = useState(false);
  const [planName, setPlanName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const [days, setDays] = useState<{
    [key: string]: string;
  }>({
    trainingsplanMontag: "",
    trainingsplanDienstag: "",
    trainingsplanMittwoch: "",
    trainingsplanDonnerstag: "",
    trainingsplanFreitag: "",
    trainingsplanSamstag: "",
    trainingsplanSonntag: "",
  });

  useEffect(() => {
    const savedUsername = sessionStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleButtonClick = () => {
    if (!disabled) {
      setShowForm(!showForm);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { username, planName, description, ...days };

    try {
      const response = await fetch("/api/createWorkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Workout created successfully", result);
        setShowForm(false);
        refreshWorkouts();
        handleMyPace();
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleDayChange = (day: string, value: string) => {
    setDays((prevDays) => ({
      ...prevDays,
      [day]: value,
    }));
  };

  return (
    <>
      <div className="w-1/3 flex justify-center">
        <button
          className={`border p-0.5 rounded-lg ${
            disabled
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "hover:bg-[#00FF57] hover:text-black"
          }`}
          onClick={handleButtonClick}
          disabled={disabled}
        >
          Trainingsplan Erstellen
        </button>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#17181C] p-8 border border-[#00FF57] border-opacity-25 rounded-lg shadow-lg w-full max-w-lg mx-4 h-auto z-50">
            <h2 className="text-2xl mb-4 text-[#00FF57]">
              Create Workout Plan <span className="text-white">{username}</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="text-[#00FF57] font-Oswald"
            >
              <div className="mb-2">
                <label
                  className="block text-[#00FF57] text-sm font-bold mb-1"
                  htmlFor="planName"
                >
                  Plan Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="planName"
                  type="text"
                  placeholder="Plan Name"
                  maxLength={25}
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#00FF57] text-sm font-bold mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Description"
                  maxLength={350}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { day: "trainingsplanMontag", label: "Mo" },
                  { day: "trainingsplanDienstag", label: "Di" },
                  { day: "trainingsplanMittwoch", label: "Mi" },
                  { day: "trainingsplanDonnerstag", label: "Do" },
                  { day: "trainingsplanFreitag", label: "Fr" },
                  { day: "trainingsplanSamstag", label: "Sa" },
                  { day: "trainingsplanSonntag", label: "So" },
                ].map(({ day, label }) => (
                  <div className="mb-2" key={day}>
                    <label
                      className="block text-[#00FF57] text-sm font-bold mb-1"
                      htmlFor={day}
                    >
                      {label}
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={day}
                      type="text"
                      placeholder={`Trainingsplan für ${label}`}
                      maxLength={40}
                      value={days[day]}
                      onChange={(e) => handleDayChange(day, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-[#00FF57] hover:bg-green-700 text-black font-bebas font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create Plan
                </button>
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={() => setShowForm(false)}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
