import Image from "next/image";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tl from-pink-300 via-violet-300 to-teal-300">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <About />
        <ProjectsSection />
      </div>
    </main>
  );
}
