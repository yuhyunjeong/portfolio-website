"use client";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1">
        <div className="place-self-center mt-32 mb-32 max-w-3xl">
          <div className="text-teal-100 text-xl">Hi! I'm</div>
          <h1 className="text-white mt-4 text-5xl lg:text-5xl font-extrabold">
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
          <div className="text-teal-100 text-4xl mb-4 font-semibold">
            I'm a web developer.
          </div>
          <p className="text-teal-100 text-xl">
            My goal is to continue blending functionality with eye-catching UX
            design as I further develop my frontend expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
