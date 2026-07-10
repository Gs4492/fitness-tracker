import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save } from "lucide-react";
import { addProgress } from "../../services/database";

export default function LogProgress() {
  const navigate = useNavigate();

  const [weight, setWeight] = useState(70);
  const [waist, setWaist] = useState(0);
  const [chest, setChest] = useState(0);
  const [shoulders, setShoulders] = useState(0);
  const [biceps, setBiceps] = useState(0);
  const [pushups, setPushups] = useState(0);
  const [plank, setPlank] = useState(0);

  async function saveProgress() {
    await addProgress({
      date: new Date().toISOString().split("T")[0],
      weight,
      waist,
      chest,
      shoulders,
      biceps,
      pushups,
      plank,
    });

    navigate("/progress");
  }

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <h1 className="text-4xl font-bold">
        Log Progress
      </h1>

      <p className="text-text-secondary mt-2">
        Record today's measurements.
      </p>

      <div className="space-y-5 mt-8">

        <Input
          label="Weight (kg)"
          value={weight}
          setValue={setWeight}
        />

        <Input
          label="Waist (cm)"
          value={waist}
          setValue={setWaist}
        />

        <Input
          label="Chest (cm)"
          value={chest}
          setValue={setChest}
        />

        <Input
          label="Shoulders (cm)"
          value={shoulders}
          setValue={setShoulders}
        />

        <Input
          label="Biceps (cm)"
          value={biceps}
          setValue={setBiceps}
        />

        <Input
          label="Max Push-ups"
          value={pushups}
          setValue={setPushups}
        />

        <Input
          label="Plank (seconds)"
          value={plank}
          setValue={setPlank}
        />

        <button
          onClick={saveProgress}
          className="btn btn-success btn-lg w-full flex items-center justify-center gap-2"
        >
          <Save size={20} />
          Save Progress
        </button>

      </div>

    </div>
  );
}

interface InputProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

function Input({ label, value, setValue }: InputProps) {
  return (
    <div className="card">

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full bg-bg-dark border border-gray-700 rounded-lg p-3"
      />

    </div>
  );
}