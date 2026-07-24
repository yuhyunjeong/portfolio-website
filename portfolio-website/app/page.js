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
      {/*<Confetti />*/}

      <div className="mt-24 px-12 py-4">
        <section className="font-bold text-xl sm:text-4xl flex-1 flex flex-col items-center justify-center text-white text-center my-12">
          Writing a New Chapter.<br></br>See you soon!
        </section>

        <Quote />

        {/*<About />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />*/}
      </div>
    </main>
  );
}
