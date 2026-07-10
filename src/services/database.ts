import Dexie, { type Table } from "dexie";
import type {
  UserProgress,
  UserSettings,
  CompletedWorkout,
  DailyTracker,
} from "../types";

export interface User extends UserSettings {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class FitnessDB extends Dexie {
  user!: Table<User>;
  progress!: Table<UserProgress>;
  workouts!: Table<CompletedWorkout>;
  daily!: Table<DailyTracker>;

  constructor() {
    super("FitnessTransformDB");

    this.version(1).stores({
      user: "++id",
      progress: "++id,date",
      workouts: "++id,date,dayId",
      daily: "date",
    });
  }
}

export const db = new FitnessDB();

// --------------------------------------------------
// USER
// --------------------------------------------------

export async function initializeUser(settings: UserSettings) {
  const existing = await db.user.toArray();

  if (existing.length === 0) {
    await db.user.add({
      ...settings,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

export async function getUser(): Promise<User | undefined> {
  const users = await db.user.toArray();
  return users[0];
}

export async function updateUser(updates: Partial<UserSettings>) {
  const users = await db.user.toArray();

  if (users.length > 0) {
    await db.user.update(users[0].id!, {
      ...updates,
      updatedAt: new Date(),
    });
  }
}

// --------------------------------------------------
// PROGRESS
// --------------------------------------------------

export async function addProgress(progress: UserProgress) {
  await db.progress.add(progress);
}

export async function getProgressHistory() {
  return await db.progress.toArray();
}

// --------------------------------------------------
// WORKOUTS
// --------------------------------------------------

export async function completeWorkout(workout: CompletedWorkout) {
  await db.workouts.add(workout);
}

export async function getCompletedWorkouts() {
  return await db.workouts.toArray();
}

// --------------------------------------------------
// DAILY TRACKER
// --------------------------------------------------

export async function addDailyTracker(tracker: DailyTracker) {
  await db.daily.put(tracker);
}

export async function getDailyTracker(
  date: Date
): Promise<DailyTracker | undefined> {
  const key = date.toISOString().split("T")[0];
  return await db.daily.get(key);
}

// --------------------------------------------------
// DASHBOARD
// --------------------------------------------------

export async function getDashboardData() {
  const user = await getUser();

  const workouts = await getCompletedWorkouts();

  const today = await getDailyTracker(new Date());

  const streak = await calculateWorkoutStreak();

  return {
    user,

    workoutCount: workouts.length,

    protein: today?.proteinIntake ?? 0,

    water: today?.waterIntake ?? 0,

    streak,
  };
}

// --------------------------------------------------
// PROTEIN
// --------------------------------------------------

export async function updateProtein(amount: number) {
  const key = new Date().toISOString().split("T")[0];

  let today = await db.daily.get(key);

  if (!today) {
    today = {
      date: key,
      proteinIntake: 0,
      waterIntake: 0,
    };
  }

  today.proteinIntake += amount;

  await db.daily.put(today);
}

export async function getTodayProtein() {
  const today = await getDailyTracker(new Date());
  return today?.proteinIntake ?? 0;
}

// --------------------------------------------------
// WATER
// --------------------------------------------------

export async function updateWater(amount: number) {
  const key = new Date().toISOString().split("T")[0];

  let today = await db.daily.get(key);

  if (!today) {
    today = {
      date: key,
      proteinIntake: 0,
      waterIntake: 0,
    };
  }

  today.waterIntake += amount;

  await db.daily.put(today);
}

export async function getTodayWater() {
  const today = await getDailyTracker(new Date());
  return today?.waterIntake ?? 0;
}

export async function saveCompletedWorkout(workout: CompletedWorkout) {
  console.log("Saving workout...", workout);

  await db.workouts.add(workout);

  console.log("Workout saved!");

  console.log(await db.workouts.toArray());
}

export async function calculateWorkoutStreak(): Promise<number> {
  const workouts = await getCompletedWorkouts();

  if (workouts.length === 0) {
    return 0;
  }

  const uniqueDays = [
    ...new Set(
      workouts.map((w) =>
        new Date(w.date).toISOString().split("T")[0]
      )
    ),
  ].sort().reverse();

  let streak = 0;

  const current = new Date();

  while (true) {
    const day = current.toISOString().split("T")[0];

    if (uniqueDays.includes(day)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

export async function getLatestProgress() {
  const progress = await db.progress.orderBy("date").reverse().first();
  return progress;
}