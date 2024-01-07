import Image from "next/image";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tl from-pink-300 via-violet-300 to-teal-300">
      <div class="container mx-auto px-12 py-4">
        <About />
      </div>
    </main>
  );
}
