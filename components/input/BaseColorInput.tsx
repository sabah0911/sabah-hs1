"use client";
import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import ColorSuggestionModal from "../modal/ColorSuggestionModal";
import TutorialBox from "../modal/TutorialBox";

interface BaseColorInputProps {
  baseColor: string;
  setBaseColor: (color: string) => void;
  onColorChange: () => void;
}

const BaseColorInput: React.FC<BaseColorInputProps> = ({
  baseColor,
  setBaseColor,
  onColorChange,
}) => {
  const [inputValue, setInputValue] = useState(baseColor); // Local state for input field
  const [error, setError] = useState<string | null>(null); // Error state for validation
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility
  const [showTutorial, setShowTutorial] = useState(false); // Tutorial visibility
  const [highlightInput, setHighlightInput] = useState(false); // Input highlight state

  // Array of hex color strings
  const colorSuggestions = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#FFC300",
    "#33FFF6",
    "#C70039",
  ];
  const [suggestedColor, setSuggestedColor] = useState(colorSuggestions[0]); // Default suggested color

  useEffect(() => {
    const tutorialSeen = localStorage.getItem("tutorialSeen");
    if (!tutorialSeen) {
      setShowTutorial(true);
    }
  }, []);

  // Sync inputValue with baseColor when baseColor changes
  useEffect(() => {
    setInputValue(baseColor);
  }, [baseColor]);

  const handleColorChange = (color: string) => {
    setBaseColor(color); // Update base color
    setInputValue(color); // Update input field value
    setError(null); // Clear error when valid color is selected
    onColorChange(); // Trigger palette generation
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // Update the input field

    // Allow partial inputs (e.g., "#", "#F", "#FF", etc.)
    if (value === "" || /^#[0-9A-Fa-f]{0,6}$/i.test(value)) {
      setError(null); // Clear error for valid partial or complete inputs
      if (/^#([0-9A-Fa-f]{3}){1,2}$/i.test(value)) {
        // Only update baseColor if the input is a complete HEX color
        setBaseColor(value);
        onColorChange();
      }
    } else {
      setError("Invalid hex color. Please enter a valid value like #RRGGBB.");
      updateSuggestedColor(); // Update suggested color dynamically
      setModalOpen(true); // Open modal on invalid input
    }
  };

  const updateSuggestedColor = () => {
    // Randomly select a color from the array
    const randomIndex = Math.floor(Math.random() * colorSuggestions.length);
    setSuggestedColor(colorSuggestions[randomIndex]);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSelectSuggestedColor = (color: string) => {
    setBaseColor(color); // Set suggested color as base color
    setInputValue(color); // Update input value
    setModalOpen(false); // Close modal
    setError(null); // Clear error
    onColorChange(); // Trigger palette generation
  };

  const handleTutorialClose = () => {
    localStorage.setItem("tutorialSeen", "true");
    setShowTutorial(false);
    setHighlightInput(true); // Highlight input field
    setTimeout(() => setHighlightInput(false), 3000); // Remove highlight after 3 seconds
  };

  return (
    <div className="flex flex-col items-center gap-4 font-poppins">
      {/* Tutorial Box */}
      {showTutorial && <TutorialBox onClose={handleTutorialClose} />}

      {/* Color Wheel Picker */}
      <HexColorPicker
        color={baseColor}
        onChange={handleColorChange}
        className="w-80 h-80 rounded-full"
      />
      {/* Selected Color and Input */}
      <div className="flex items-center gap-2 text-sm text-zinc-600">
        <p className="text-center">Selected Color:</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="#RRGGBB"
          size={7}
          className={`w-auto bg-transparent text-zinc-600 focus:outline-none text-center transition-shadow ${
            highlightInput ? "animate-highlight" : ""
          }`}
          maxLength={7}
        />
      </div>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      {/* Suggestion Modal */}
      <ColorSuggestionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        suggestedColor={suggestedColor}
        onSelectColor={handleSelectSuggestedColor}
      />
    </div>
  );
};

export default BaseColorInput;