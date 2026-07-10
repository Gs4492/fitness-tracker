import { programData } from "../../data/program";
import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "../../components/ExerciseCard";
import WorkoutPlayer from "./WorkoutPlayer";
import { useWorkout } from "../../hooks/useWorkout";
import { saveCompletedWorkout } from "../../services/database";

export default function Workout() {
  const navigate = useNavigate();

  /*
  0 = Sunday
  1 = Monday
  2 = Tuesday
  3 = Wednesday
  4 = Thursday
  5 = Friday
  6 = Saturday
  */

  const today = new Date().getDay();

  const isRecoveryDay = today === 0;

  const workoutIndex = isRecoveryDay ? 0 : today - 1;

  const workout = programData.weeks[0].days[workoutIndex];

  const engine = useWorkout(workout.exercises.length);

  if (isRecoveryDay) {
    return (
      <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-text-secondary"
        >
          <ArrowLeft size={20} />
          Home
        </button>

        <h1 className="text-4xl font-bold mt-8">
          Recovery Day 😌
        </h1>

        <p className="text-text-secondary mt-4">
          Today is your recovery day.
        </p>

        <div className="card-lg mt-8">
          <h2 className="text-2xl font-bold">
            Today's Goals
          </h2>

          <ul className="mt-6 space-y-3">
            <li>🚶 Walk for 20–30 minutes</li>
            <li>🧘 Stretch for 10 minutes</li>
            <li>💧 Drink at least 3L of water</li>
            <li>🥩 Hit your protein goal</li>
            <li>😴 Get 7–9 hours of sleep</li>
          </ul>
        </div>

      </div>
    );
  }

  async function finishWorkout() {
    await saveCompletedWorkout({
      id: crypto.randomUUID(),
      date: new Date(),
      dayId: workout.id,
      duration: workout.duration,
      exercisesCompleted: workout.exercises.map((e) => e.id),
      notes: "",
    });

    engine.resetWorkout();
    navigate("/");
  }

  if (engine.workoutStarted || engine.workoutFinished) {
    return (
      <WorkoutPlayer
        workout={workout}
        currentExercise={engine.currentExercise}
        currentSet={engine.currentSet}
        finished={engine.workoutFinished}
        onCompleteSet={() => {
          const current =
            workout.exercises[engine.currentExercise];

          engine.nextSet(current.sets ?? 1);
        }}
        onFinish={finishWorkout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary px-5 pt-8 pb-32">

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-text-secondary"
      >
        <ArrowLeft size={20} />
        Home
      </button>

      <p className="text-primary uppercase tracking-widest text-sm font-semibold mt-6">
        Today's Mission
      </p>

      <h1 className="text-4xl font-bold mt-2">
        {workout.name}
      </h1>

      <p className="text-text-secondary mt-2">
        {workout.focus}
      </p>

      <div className="flex items-center gap-2 mt-4">
        <Clock size={18} />
        <span>{workout.duration} Minutes</span>
      </div>

      <button
        onClick={engine.startWorkout}
        className="btn btn-primary btn-lg w-full mt-8"
      >
        ▶ Start Workout
      </button>

      <h2 className="text-xl font-bold mt-10 mb-4">
        Exercises
      </h2>

      <div className="space-y-5">
        {workout.exercises.map((exercise, index) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            index={index}
          />
        ))}
      </div>

    </div>
  );
}