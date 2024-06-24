import React from "react";
import { Workout } from "@/types/workout";

interface DeleteWorkoutProps {
  workout: Workout;
  onDelete: (id: string) => void;
}

const DeleteWorkout: React.FC<DeleteWorkoutProps> = ({ workout, onDelete }) => {
  const handleDelete = async () => {
    if (
      confirm(`Are you sure you want to delete the workout: ${workout.name}?`)
    ) {
      try {
        const response = await fetch(`/api/workoutsLoggedIn?id=${workout.id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error deleting workout:", errorData.error);
        } else {
          onDelete(workout.id);
          const data = await response.json();
          console.log("Workout deleted successfully:", data.message);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="ml-2 bg-red-600 text-white rounded-md px-4 py-1"
    >
      Delete
    </button>
  );
};

export default DeleteWorkout;
