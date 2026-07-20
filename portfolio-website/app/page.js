import Image from "next/image";
import About from "./components/About";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

import Confetti from "./components/Confetti";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Confetti />
      <Quote />

      <div className="mt-24 px-12 py-4">
        <About />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
