"use client";

import About from "./section/About";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Education from "./section/Education";
import Profile from "./section/Profile";

export default function Home() {
  return (
    <main className="md:mx-[10%] md:mt-10">
      <Profile />

      <About />

      <Projects />

      <Experience />

      <Education />
    </main>
  );
}
