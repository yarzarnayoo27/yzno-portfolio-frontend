"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        w-[100px]
        h-[40px]
        rounded-full
        ${
          isDark
            ? "bg-gradient-to-tr from-[#041326] to-[#0E314C]"
            : "bg-gradient-to-tr from-[#77C2D0] to-[#3D91A7]"
        }
        // 041326
        // 0E314C
        relative
        transition-all
        duration-300
      `}
      style={{boxShadow: "rgb(0 0 0 / 20%) -3px 3px 2px 0px inset"}}
    >
      {/* Toggle circle */}
      <span
        className={`
          absolute
          top-[4px]
          left-[4px]
          w-[32px]
          h-[32px]
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          ease-out
          ${isDark ? "translate-x-[56px]" : ""}
        `}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

/* ---------- Icons ---------- */

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5B301"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  );
}
