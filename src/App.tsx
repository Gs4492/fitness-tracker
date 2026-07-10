import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navigation from "./components/Navigation";

import Dashboard from "./features/dashboard/Dashboard";
import Workout from "./features/workout/Workout";
import Progress from "./features/progress/Progress";
import LogProgress from "./features/progress/LogProgress";
import Nutrition from "./features/nutrition/Nutrition";
import Settings from "./features/settings/Settings";

import { initializeUser, getUser } from "./services/database";

import "./App.css";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      const user = await getUser();

      if (!user) {
        await initializeUser({
          startWeight: 70,
          proteinTarget: 130,
          waterTarget: 3,
        });
      }

      setIsInitialized(true);
    }

    init();
  }, []);

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bg-dark">
        <div className="text-center">
          <div className="text-primary text-4xl mb-4">
            💪
          </div>

          <p className="text-text-primary">
            Loading your fitness journey...
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>

      <div className="flex flex-col h-screen bg-bg-dark text-text-primary">

        <div className="flex-1 overflow-y-auto pb-20">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/workout"
              element={<Workout />}
            />

            <Route
              path="/progress"
              element={<Progress />}
            />

            <Route
              path="/progress/log"
              element={<LogProgress />}
            />

            <Route
              path="/nutrition"
              element={<Nutrition />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

        </div>

        <Navigation />

      </div>

    </Router>
  );
}

export default App;