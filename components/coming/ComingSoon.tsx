"use client";

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

const ComingSoon = () => {
  useEffect(() => {
    // Basic confetti explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FF69B4', '#4B0082', '#00BFFF', '#FFD700'],
    };

    const fire = (particleRatio: number, opts: any) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const handleHover = () => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FF69B4', '#4B0082', '#00BFFF', '#FFD700'],
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FF69B4', '#4B0082', '#00BFFF', '#FFD700'],
    });
  };

  return (
    <div className="flex flex-col font-poppins items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-40 right-32 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-30 animate-float-delayed"></div>
      
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-6xl mb-5 md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Coming Soon!
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
          We're mixing the perfect color palette for you! 🎨 Stay tuned for something 
          <span className="font-semibold text-purple-600"> colorful</span> and 
          <span className="font-semibold text-blue-600"> amazing</span>!
        </div>

        <div className="space-y-6">
          <a 
            href="/"
            onMouseEnter={handleHover}
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            🏡 Back to Home
          </a>
          
          <p className="text-slate-500 text-sm mt-4">
            P.S. We promise it'll be worth the wait! ⏳
          </p>
        </div>
      </div>

      {/* Animated confetti particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              top: `-10%`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;