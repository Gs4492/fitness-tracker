export function getCurrentWeek(startDate: Date): number {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
  return Math.min(weeks, 12);
}

export function getCurrentDay(startDate: Date): number {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  return days % 7;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function calculateStreak(completedWorkouts: Date[]): number {
  if (completedWorkouts.length === 0) return 0;

  const sortedDates = completedWorkouts
    .map(d => new Date(d).toDateString())
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  let streak = 1;
  const today = new Date().toDateString();

  if (sortedDates[0] !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (sortedDates[0] !== yesterday.toDateString()) {
      return 0;
    }
  }

  for (let i = 1; i < sortedDates.length; i++) {
    const current = new Date(sortedDates[i]);
    const prev = new Date(sortedDates[i - 1]);
    const diff = (prev.getTime() - current.getTime()) / (24 * 60 * 60 * 1000);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export function getProgressPercentage(current: number, goal: number): number {
  return Math.min(Math.round((current / goal) * 100), 100);
}

export function calculateProteinTarget(weight: number): number {
  return Math.round(weight * 1.8);
}

export function calculateWaterTarget(weight: number): number {
  const liters = weight * 0.04;
  return Math.round(liters * 10) / 10;
}
