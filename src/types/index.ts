export interface Exercise {
  id: string;
  name: string;
  targets: string[];
  description: string;
  why: string;
  form: string[];
  mistakes: string[];
  reps?: number;
  sets?: number;
  tempo?: string;
  rest?: number;
  easyVariation?: string;
  hardVariation?: string;
  images?: string[];
}

export interface WorkoutDay {
  id: string;
  day: number;
  name: string;
  focus: string;
  duration: number;
  exercises: Exercise[];
  warmup?: string[];
  cooldown?: string[];
}

export interface Week {
  week: number;
  days: WorkoutDay[];
}

export interface TrainingProgram {
  name: string;
  duration: number;
  weeks: Week[];
}

export interface UserProgress {
  date: string;
  weight: number;
  waist: number;
  chest: number;
  shoulders: number;
  biceps: number;
  pushups: number;
  plank: number;
  bodyFat?: number;
}

export interface UserSettings {
  age?: number;
  height?: number;
  startWeight: number;
  targetWeight?: number;
  proteinTarget: number;
  waterTarget: number;
  dailyGoals?: {
    protein: boolean;
    water: boolean;
    stretching: boolean;
    workout: boolean;
  };
}

export interface CompletedWorkout {
  id: string;
  date: Date;
  dayId: string;
  duration: number;
  exercisesCompleted: string[];
  notes?: string;
}

export interface DailyTracker {
  date: string;
  proteinIntake: number;
  waterIntake: number;
  workout?: CompletedWorkout;
  sleep?: number;
  notes?: string;
}
