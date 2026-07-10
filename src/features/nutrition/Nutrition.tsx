import { useEffect, useState } from "react";
import {
  Egg,
  Droplets,
  CircleCheck,
  Apple,
} from "lucide-react";

import {
  updateProtein,
  updateWater,
  getTodayProtein,
  getTodayWater,
} from "../../services/database";

export default function Nutrition() {
  const proteinGoal = 130;
  const waterGoal = 3;

  const [protein, setProtein] = useState(0);
  const [water, setWater] = useState(0);

  useEffect(() => {
    async function load() {
      setProtein(await getTodayProtein());
      setWater(await getTodayWater());
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <h1 className="text-4xl font-bold">
        Nutrition
      </h1>

      <p className="text-text-secondary mt-2">
        Fuel your body for muscle growth.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="card">

          <Egg className="text-primary" />

          <p className="mt-4 text-text-secondary">
            Protein
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {protein} / {proteinGoal}g
          </h2>

          <button
            onClick={async () => {
              await updateProtein(10);
              setProtein(await getTodayProtein());
            }}
            className="btn btn-primary w-full mt-5"
          >
            +10g
          </button>

        </div>

        <div className="card">

          <Droplets className="text-primary" />

          <p className="mt-4 text-text-secondary">
            Water
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {water.toFixed(2)} / {waterGoal}L
          </h2>

          <button
            onClick={async () => {
              await updateWater(0.25);
              setWater(await getTodayWater());
            }}
            className="btn btn-primary w-full mt-5"
          >
            +250ml
          </button>

        </div>

      </div>

      <div className="card-lg mt-8">

        <h2 className="text-2xl font-bold">
          Budget Protein Foods
        </h2>

        <div className="mt-6 space-y-3">

          {[
            "🥚 Eggs",
            "🧀 Paneer",
            "🥛 Milk",
            "🥣 Curd",
            "🫘 Soya Chunks",
            "🫘 Dal",
            "🥜 Peanuts",
            "🌱 Chickpeas",
          ].map(food => (

            <div
              key={food}
              className="flex items-center gap-3"
            >

              <CircleCheck
                className="text-success"
                size={18}
              />

              <span>{food}</span>

            </div>

          ))}

        </div>

      </div>

      <div className="card-lg mt-8">

        <h2 className="text-2xl font-bold">
          Daily Habits
        </h2>

        <div className="mt-6 space-y-3">

          {[
            "Drink water after waking",
            "Protein in every meal",
            "Sleep 7-8 hours",
            "Eat vegetables",
            "Stay consistent",
          ].map(habit => (

            <div
              key={habit}
              className="flex items-center gap-3"
            >

              <Apple
                className="text-success"
                size={18}
              />

              <span>{habit}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}