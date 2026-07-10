import { useEffect, useState } from "react";
import { CheckCircle2, Trophy } from "lucide-react";
import type { WorkoutDay } from "../../types";

interface WorkoutPlayerProps {
  workout: WorkoutDay;
  currentExercise: number;
  currentSet: number;
  finished: boolean;
  onCompleteSet: () => void;
  onFinish: () => void;
}

export default function WorkoutPlayer({
  workout,
  currentExercise,
  currentSet,
  finished,
  onCompleteSet,
  onFinish,
}: WorkoutPlayerProps) {
  const exercise = workout.exercises[currentExercise];

  const [resting, setResting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(exercise.rest ?? 60);

  useEffect(() => {
    setSecondsLeft(exercise.rest ?? 60);
  }, [exercise]);

  useEffect(() => {
    if (!resting) return;

    if (secondsLeft <= 0) {
      setResting(false);
      onCompleteSet();
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resting, secondsLeft, onCompleteSet]);

  if (finished) {
    return (
      <div className="min-h-screen bg-bg-dark text-text-primary flex flex-col justify-center items-center px-6">

        <Trophy size={80} className="text-warning" />

        <h1 className="text-4xl font-bold mt-6">
          Workout Complete 🎉
        </h1>

        <p className="text-text-secondary mt-3 text-center">
          Great job! You finished today's workout.
        </p>

        <button
          onClick={onFinish}
          className="btn btn-primary btn-lg w-full mt-10"
        >
          Back to Dashboard
        </button>

      </div>
    );
  }

  const progress =
    ((currentExercise + 1) / workout.exercises.length) * 100;

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <div className="mb-8">

        <p className="text-primary uppercase tracking-widest text-sm font-semibold">
          Workout In Progress
        </p>

        <h1 className="text-4xl font-bold mt-2">
          {exercise.name}
        </h1>

        <p className="text-text-secondary mt-3">
          {exercise.targets.join(" • ")}
        </p>

      </div>

      <div className="card-lg">

        <div className="grid grid-cols-3 text-center gap-4">

          <div>

            <p className="text-text-secondary text-sm">
              Set
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {currentSet}/{exercise.sets}
            </h2>

          </div>

          <div>

            <p className="text-text-secondary text-sm">
              Reps
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {exercise.reps}
            </h2>

          </div>

          <div>

            <p className="text-text-secondary text-sm">
              Rest
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {exercise.rest}s
            </h2>

          </div>

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span>Workout Progress</span>

          <span>{Math.round(progress)}%</span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {!resting ? (

        <button
          onClick={() => setResting(true)}
          className="btn btn-success btn-lg w-full mt-10 flex justify-center items-center gap-2"
        >
          <CheckCircle2 size={22} />
          Complete Set
        </button>

      ) : (

        <div className="card-lg mt-10 text-center">

          <p className="text-text-secondary">
            Rest Time
          </p>

          <h1 className="text-6xl font-bold mt-4">
            {secondsLeft}
          </h1>

          <button
            onClick={() => {
              setResting(false);
              onCompleteSet();
            }}
            className="btn btn-primary w-full mt-8"
          >
            Skip Rest
          </button>

        </div>

      )}

    </div>
  );
}