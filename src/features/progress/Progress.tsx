import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Scale,
  Ruler,
  Dumbbell,
  TrendingUp,
  Calendar,
  Clock,
  Plus,
} from "lucide-react";

import {
  getCompletedWorkouts,
  getLatestProgress,
} from "../../services/database";

import type {
  CompletedWorkout,
  UserProgress,
} from "../../types";

export default function Progress() {
  const navigate = useNavigate();

  const [workouts, setWorkouts] = useState<CompletedWorkout[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    async function load() {
      const history = await getCompletedWorkouts();
      const latest = await getLatestProgress();

      setWorkouts([...history].reverse());
      setProgress(latest ?? null);
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Progress
          </h1>

          <p className="text-text-secondary mt-2">
            Track your body transformation.
          </p>

        </div>

        <button
          onClick={() => navigate("/progress/log")}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={18} />
          Log
        </button>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="card">
          <Scale className="text-primary" />

          <p className="mt-4 text-text-secondary">
            Weight
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {progress?.weight ?? "--"} kg
          </h2>

        </div>

        <div className="card">

          <Ruler className="text-primary" />

          <p className="mt-4 text-text-secondary">
            Waist
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {progress?.waist ?? "--"} cm
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">

        <div className="card">

          <Dumbbell className="text-primary" />

          <p className="mt-4 text-text-secondary">
            Push-ups
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {progress?.pushups ?? "--"}
          </h2>

        </div>

        <div className="card">

          <TrendingUp className="text-primary" />

          <p className="mt-4 text-text-secondary">
            Plank
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {progress?.plank ?? "--"} sec
          </h2>

        </div>

      </div>

      <div className="card-lg mt-8">

        <h2 className="text-2xl font-bold">
          Latest Measurements
        </h2>

        <div className="mt-6 space-y-4">

          {[
            ["Chest", progress?.chest],
            ["Shoulders", progress?.shoulders],
            ["Biceps", progress?.biceps],
            ["Waist", progress?.waist],
          ].map(([label, value]) => (

            <div
              key={label}
              className="flex justify-between border-b border-gray-800 pb-3"
            >
              <span>{label}</span>

              <span className="text-text-secondary">
                {value ?? "--"} cm
              </span>

            </div>

          ))}

        </div>

      </div>

      <div className="card-lg mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Workout History
        </h2>

        {workouts.length === 0 ? (

          <p className="text-text-secondary">
            No workouts completed yet.
          </p>

        ) : (

          <div className="space-y-4">

            {workouts.map((workout) => (

              <div
                key={workout.id}
                className="border border-gray-800 rounded-lg p-4"
              >

                <div className="flex justify-between">

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />

                    <span>
                      {new Date(workout.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />

                    <span>
                      {workout.duration} min
                    </span>
                  </div>

                </div>

                <h3 className="text-xl font-semibold mt-4">
                  {workout.dayId}
                </h3>

                <p className="text-text-secondary mt-2">
                  {workout.exercisesCompleted.length} exercises completed
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}