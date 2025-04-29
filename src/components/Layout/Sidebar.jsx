import {
  Home,
  List,
  PieChart,
  PiggyBank,
  Calendar,
  ChevronLeft,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Overview", icon: Home, path: "/overview" },
  { name: "Transactions", icon: List, path: "/transactions" },
  { name: "Budgets", icon: PieChart, path: "/budgets" },
  { name: "Pots", icon: PiggyBank, path: "/pots" },
  { name: "Recurring Bills", icon: Calendar, path: "/bills" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-[#181B17] text-white fixed left-0 top-0 z-40">
        <div className="flex items-center h-20 px-8 font-bold text-2xl tracking-tight">
          finance
        </div>
        <nav className="flex-1 flex flex-col gap-1 mt-4">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 mx-2 rounded-lg transition-colors ${
                  active
                    ? "bg-[#F3F3E7] text-black font-semibold"
                    : "hover:bg-[#23261F] text-white"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <button className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 px-8 py-4 mt-auto mb-2">
          <ChevronLeft size={18} />
          Minimize Menu
        </button>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-[#181B17] text-white border-t border-[#23261F]">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex-1 flex flex-col items-center justify-center py-2 ${
                active
                  ? "text-[#181B17] bg-[#F3F3E7] font-semibold"
                  : "hover:bg-[#23261F]"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
