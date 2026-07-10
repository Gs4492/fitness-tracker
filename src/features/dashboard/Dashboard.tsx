import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flame,
  Dumbbell,
  Droplets,
  Egg,
} from "lucide-react";

import { programData } from "../../data/program";
import {
  getDashboardData,
  updateProtein,
  updateWater,
} from "../../services/database";

export default function Dashboard() {
  const navigate = useNavigate();

  const todayWorkout = programData.weeks[0].days[0];

  const [dashboard, setDashboard] = useState({
    protein: 0,
    water: 0,
    streak: 0,
    workoutCount: 0,
    user: null as any,
  });

  async function loadDashboard() {
    const data = await getDashboardData();
    setDashboard(data);
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <p className="text-text-secondary">
        Good Morning 👋
      </p>

      <h1 className="text-4xl font-bold mt-1">
        Geet
      </h1>

      <div className="card-lg mt-8">

        <p className="text-primary uppercase tracking-widest text-sm font-semibold">
          Today's Mission
        </p>

        <h2 className="text-3xl font-bold mt-3">
          {todayWorkout.name}
        </h2>

        <p className="text-text-secondary mt-2">
          {todayWorkout.focus}
        </p>

        <div className="flex items-center gap-2 mt-5">
          <Dumbbell size={18} />
          <span>{todayWorkout.duration} Minutes</span>
        </div>

        <button
          onClick={() => navigate("/workout")}
          className="btn btn-primary btn-lg w-full mt-6"
        >
          Continue Workout
        </button>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="card">

          <div className="flex items-center gap-2 text-primary">
            <Egg size={18} />
            <span>Protein</span>
          </div>

          <h2 className="text-2xl font-bold mt-3">
            {dashboard.protein} / {dashboard.user?.proteinTarget ?? 130} g
          </h2>

          <button
            onClick={async () => {
              await updateProtein(10);
              await loadDashboard();
            }}
            className="btn btn-primary w-full mt-4"
          >
            +10g
          </button>

        </div>

        <div className="card">

          <div className="flex items-center gap-2 text-blue-400">
            <Droplets size={18} />
            <span>Water</span>
          </div>

          <h2 className="text-2xl font-bold mt-3">
            {dashboard.water} / {dashboard.user?.waterTarget ?? 3} L
          </h2>

          <button
            onClick={async () => {
              await updateWater(0.25);
              await loadDashboard();
            }}
            className="btn btn-primary w-full mt-4"
          >
            +250 ml
          </button>

        </div>

      </div>

      <div className="card-lg mt-6">

        <div className="flex justify-between">

          <h3 className="font-semibold">
            Completed Workouts
          </h3>

          <span className="text-primary">
            {dashboard.workoutCount}
          </span>

        </div>

      </div>

      <div className="card-lg mt-6 flex items-center justify-between">

        <div>

          <p className="text-text-secondary">
            Current Streak
          </p>

          <h2 className="text-3xl font-bold mt-1">
            {dashboard.streak} Days
          </h2>

        </div>

        <Flame
          size={40}
          className="text-orange-500"
        />

      </div>

    </div>
  );
}