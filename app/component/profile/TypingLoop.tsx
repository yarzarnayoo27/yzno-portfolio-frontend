"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const texts = ["Yar Zar Nay Oo!", "Front-End Engineer!", "Back-End Engineer!"];

export default function TypingLoop() {
  const { theme } = useTheme();
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentText = texts[textIndex];

    const typingSpeed = isDeleting ? 60 : 110;
    const pauseDuration = 1500;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentText.slice(0, prev.length - 1)
            : currentText.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  if (!mounted) return null;

  return (
    <h1
      className={`
        text-3xl font-bold
        bg-clip-text text-transparent
        bg-gradient-to-r
        ${
          theme === "dark"
            ? "from-[#d97706] to-[#eab308]"
            : "from-[#a855f7] to-[#6366f1]"
        }
      `}
    >
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </h1>
  );
}
