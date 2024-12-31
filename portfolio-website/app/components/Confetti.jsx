"use client";

import React from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  const handleConfetti = () => {
    confetti({
      particleCount: 1000,
      spread: 360,
      origin: { y: 0.6 },
    });
  };

  return (
    /* Fixed button on the top, with a high z-index */
    <button
      onMouseEnter={handleConfetti}
      className="
        fixed 
        top-4 
        left-1/2 
        -translate-x-1/2 
        bg-pink-500 
        text-white 
        px-4 
        py-2 
        rounded-md
        z-50
      "
    >
      Happy New Year!
    </button>
  );
}
