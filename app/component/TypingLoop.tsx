"use client";

import { useEffect, useState } from "react";

const texts = ["Yar Zar Nay Oo!", "Front-End Engineer!"];

export default function TypingLoop() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      // pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      // move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 60 : 110); // speed control
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <h1 className="text-3xl font-bold primary-gradient">
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </h1>
  );
}
