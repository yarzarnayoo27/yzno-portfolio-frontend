"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative flex items-center w-20 h-10 rounded-full
        bg-sky-300 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800
        shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] shadow-inner
        transition-all duration-500 ease-in-out
      `}
    >
      <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
        <Sun className="h-5 w-5 text-yellow-400" />
        <Moon className="h-5 w-5 text-slate-200" />
      </div>

      <span
        className={`
          absolute top-1 left-1 h-8 w-8 rounded-full
          bg-white dark:bg-slate-100
          shadow-lg
          transition-transform duration-500 ease-in-out
          ${isDark ? "translate-x-10" : "translate-x-0"}
        `}
      />
    </button>
  );
}
