import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Dumbbell,
  TrendingUp,
  Apple,
  Settings,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Workout",
    path: "/workout",
    icon: Dumbbell,
  },
  {
    name: "Progress",
    path: "/progress",
    icon: TrendingUp,
  },
  {
    name: "Nutrition",
    path: "/nutrition",
    icon: Apple,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-md bg-card-dark/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 py-2 rounded-xl transition-all duration-200
                  ${
                    active
                      ? "bg-primary text-white scale-105"
                      : "text-text-secondary hover:text-white hover:bg-gray-800"
                  }`}
              >
                <Icon size={22} strokeWidth={2.2} />
                <span className="text-[11px] mt-1 font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}