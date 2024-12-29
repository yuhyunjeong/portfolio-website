"use client";
import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import confetti from "canvas-confetti";

export default function About() {
  const confettiRef = useRef(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 1000,
      spread: 100,
      origin: { y: 0.7 },
    });
  };

  return (
    <section>
      <div className="grid grid-cols-1 my-12 md:my-20 py-12 md:py-20">
        <div className="place-self-center max-w-3xl">
          {/* Fixed button on the left side, with a high z-index */}
          <button
            onClick={handleConfetti}
            className="fixed top-1/4 left-8 transform -translate-y-1/2  px-4 py-2 bg-pink-500 text-white rounded-md z-50"
          >
            Happy New Year!
          </button>
          <div className="text-teal-100 text-xl">Hi! I&apos;m</div>
          <h1 className="text-white mt-4 !font-extrabold text-4xl md:text-6xl">
            {""}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jade Jung.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Yuhyun Jung.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br></br>
          <div className="text-teal-100 text-3xl md:text-5xl mb-4 !font-semibold">
            I&apos;m a web developer.
          </div>
          <p className="text-teal-100 text-xl md:text-2xl font-sans">
            My goal is to continue blending functionality with eye-catching UX
            design as I further develop my frontend expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
