import { useEffect, useState } from "react";
import {
  User,
  Scale,
  Target,
  Droplets,
  Save,
} from "lucide-react";

import {
  getUser,
  updateUser,
} from "../../services/database";

export default function Settings() {
  const [name] = useState("Geet");

  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [protein, setProtein] = useState(130);
  const [water, setWater] = useState(3);

  useEffect(() => {
    async function load() {
      const user = await getUser();

      if (!user) return;

      setWeight(user.startWeight);
      setHeight(user.height ?? 170);
      setProtein(user.proteinTarget);
      setWater(user.waterTarget);
    }

    load();
  }, []);

  async function saveSettings() {
    await updateUser({
      startWeight: weight,
      height,
      proteinTarget: protein,
      waterTarget: water,
    });

    alert("Settings Saved ✅");
  }

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <h1 className="text-4xl font-bold">
        Settings
      </h1>

      <p className="text-text-secondary mt-2">
        Personalize your fitness journey.
      </p>

      <div className="space-y-6 mt-8">

        <div className="card">

          <label className="flex items-center gap-2 mb-2">
            <User size={18} className="text-primary" />
            Name
          </label>

          <input
            value={name}
            disabled
            className="w-full bg-bg-dark border border-gray-700 rounded-lg p-3"
          />

        </div>

        <div className="card">

          <label className="flex items-center gap-2 mb-2">
            <Scale size={18} className="text-primary" />
            Starting Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full bg-bg-dark border border-gray-700 rounded-lg p-3"
          />

        </div>

        <div className="card">

          <label className="flex items-center gap-2 mb-2">
            <Scale size={18} className="text-primary" />
            Height (cm)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full bg-bg-dark border border-gray-700 rounded-lg p-3"
          />

        </div>

        <div className="card">

          <label className="flex items-center gap-2 mb-2">
            <Target size={18} className="text-primary" />
            Protein Goal (g)
          </label>

          <input
            type="number"
            value={protein}
            onChange={(e) => setProtein(Number(e.target.value))}
            className="w-full bg-bg-dark border border-gray-700 rounded-lg p-3"
          />

        </div>

        <div className="card">

          <label className="flex items-center gap-2 mb-2">
            <Droplets size={18} className="text-primary" />
            Water Goal (L)
          </label>

          <input
            type="number"
            step="0.5"
            value={water}
            onChange={(e) => setWater(Number(e.target.value))}
            className="w-full bg-bg-dark border border-gray-700 rounded-lg p-3"
          />

        </div>

        <button
          onClick={saveSettings}
          className="btn btn-success btn-lg w-full flex items-center justify-center gap-2"
        >
          <Save size={20} />
          Save Settings
        </button>

      </div>

    </div>
  );
}