"use client";
import React, { useState, useEffect } from "react";
import Palette from "../palette/Palette";
import BaseColorInput from "../input/BaseColorInput";
import BlobWrapper from "../wrapper/BlobWrapper";
import { generatePalette } from "@/app/utils/generatePalette.";


const Hero = () => {
  // Array of predefined hex values
  const hexColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#FFC300",
    "#33FFF6",
    "#C70039",
    "#DB3DB9",
    "#47A3FF",
  ];

  const [baseColor, setBaseColor] = useState<string>(""); // Initially empty
  const [palette, setPalette] = useState<string[]>([]);

  // Set a random base color after the component is mounted (client-side)
  useEffect(() => {
    const getRandomHexColor = () => hexColors[Math.floor(Math.random() * hexColors.length)];
    setBaseColor(getRandomHexColor());
  }, []); // Runs only once on component mount

  // Automatically generate palette when baseColor changes
  useEffect(() => {
    if (baseColor) {
      const generatedPalette = generatePalette(baseColor); // Generate palette from base color
      setPalette(generatedPalette);
    }
  }, [baseColor]); // Triggered whenever baseColor changes

  return (
    <BlobWrapper palette={palette}>
      <div className="flex flex-col items-center gap-4 relative mt-10 z-10">

        <div className="text-center flex flex-col items-center font-light text-zinc-600">
          <h1 className="text-9xl text-zinc-700 font-italiana">Tintool</h1>
          <p className="font-poppins w-[70%] text-sm">
            Your Ultimate Companion for Crafting Stunning Color Palettes,
            Tailored for Designers, Developers, and Creatives to Bring Vibrant
            Ideas to Life!
          </p>
        </div>
        {/* Base Color Input Component */}
        {baseColor && (
          <BaseColorInput
            baseColor={baseColor}
            setBaseColor={setBaseColor}
            onColorChange={() => {}} // No need to pass a handler since useEffect handles changes
          />
        )}
        {/* Palette Component */}
        {palette.length > 0 && <Palette colors={palette} />}
      </div>
    </BlobWrapper>
  );
};

export default Hero;
