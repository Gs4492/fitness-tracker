import { useState } from "react";

export function useWorkout(totalExercises: number) {
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [workoutFinished, setWorkoutFinished] = useState(false);

  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);

  const [isResting, setIsResting] = useState(false);

  function startWorkout() {
    setWorkoutStarted(true);
    setWorkoutFinished(false);
    setCurrentExercise(0);
    setCurrentSet(1);
    setIsResting(false);
  }

  function nextSet(maxSets: number) {
    if (currentSet < maxSets) {
      setCurrentSet((prev) => prev + 1);
      setIsResting(true);
      return;
    }

    nextExercise();
  }

  function nextExercise() {
    if (currentExercise < totalExercises - 1) {
      setCurrentExercise((prev) => prev + 1);
      setCurrentSet(1);
      setIsResting(false);
      return;
    }

    finishWorkout();
  }

  function finishWorkout() {
    setWorkoutFinished(true);
    setWorkoutStarted(false);
    setIsResting(false);
  }

  function finishRest() {
    setIsResting(false);
  }

  function resetWorkout() {
    setWorkoutStarted(false);
    setWorkoutFinished(false);
    setCurrentExercise(0);
    setCurrentSet(1);
    setIsResting(false);
  }

  return {
    workoutStarted,
    workoutFinished,
    currentExercise,
    currentSet,
    isResting,

    startWorkout,
    nextSet,
    nextExercise,
    finishWorkout,
    finishRest,
    resetWorkout,
  };
}