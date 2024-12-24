"use client";
import { useEffect, useState } from "react";

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Add a new snowflake at regular intervals (e.g. every 300ms)
    const addSnowflake = () => {
      const newFlake = {
        id: Date.now(),
        left: Math.random() * 100, // Random position between 0 and 100 (%)
        size: Math.floor(Math.random() * 8) + 5, // Snowflake size 5~12px
        duration: Math.random() * 3 + 2, // Falls for 2~5 seconds
      };
      setSnowflakes((prev) => [...prev, newFlake]);
    };

    const intervalId = setInterval(addSnowflake, 200);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Periodically remove old snowflakes (to prevent memory leaks)
  useEffect(() => {
    const cleanup = setInterval(() => {
      setSnowflakes((prev) =>
        prev.filter((flake) => Date.now() - flake.id < 7000)
      );
    }, 2000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    // A layer that covers the entire screen (prevents pointer events)
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${flake.left}vw`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animation: `fall ${flake.duration}s linear forwards`,

            // Blur Snowflakes
            boxShadow: "0 0 5px 3px rgba(255, 255, 255, 0.3)",
            //filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))",
          }}
        />
      ))}

      {/* 
        Falling snowflake
        In Next.js (JSX), you can use <style jsx> for styling.
      */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(110vh);
          }
        }
      `}</style>
    </div>
  );
}
