import Image from "next/image";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Snow from "./components/Snow";
import Confetti from "./components/Confetti";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Confetti />
      {/*<Snow />*/}
      <div className="mt-24 px-12 py-4">
        <About />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
