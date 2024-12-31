"use client";

import React from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  const handleConfetti = () => {
    confetti({
      particleCount: 2000,
      spread: 360,
      origin: { y: 0.5 },
    });
  };

  return (
    /* Fixed button on the top, with a high z-index */
    <button
      onMouseEnter={handleConfetti} // hover in PC
      onTouchStart={handleConfetti} // touch in mobile
      className="
        fixed 
        top-6 
        left-1/2 
        -translate-x-1/2 
        bg-purple-500 
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
