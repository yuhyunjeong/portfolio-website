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
    <main className="flex min-h-screen flex-col bg-gradient-to-tl bg-[#d6b9d6] font-mono">
      <Navbar />
      <Confetti />
      <Snow />
      <div className=" mt-24  px-12 py-4 ">
        <About />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
