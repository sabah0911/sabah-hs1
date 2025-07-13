"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { FaHandSparkles, FaTimes } from "react-icons/fa";
import { FaWandMagicSparkles, FaWandSparkles } from "react-icons/fa6";

const SurpriseMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF69B4", "#4B0082", "#00BFFF", "#FFD700"],
    });
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfetti();
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg px-5 py-3 hover:opacity-90"
      >
        <FaWandMagicSparkles />
        Surprise me
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
                <FaWandSparkles className="text-4xl text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mt-4">
                Ta-da! 🎉
              </h2>
              
              <p className="text-gray-600 text-lg">
                Here's your magical surprise! Remember, every day is a chance to 
                create something amazing ✨
              </p>

              <button
                onClick={() => {
                  triggerConfetti();
                  setTimeout(triggerConfetti, 200);
                }}
                className="mt-4 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg px-6 py-2 hover:opacity-90"
              >
                <FaHandSparkles />
                More Magic!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SurpriseMe;