"use client";
import React from "react";

interface TutorialBoxProps {
  onClose: () => void;
}

const TutorialBox: React.FC<TutorialBoxProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 font-montserrat">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md">
        <h3 className="text-lg font-montserrat font-semibold text-gray-700">Getting Started</h3>
        <p className="mt-2 text-sm text-gray-600">You can either
          use the <strong>color picker</strong> or manually enter a <strong>hex value</strong> in the input field
          to set your base color.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500 text-white rounded-md text-sm"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default TutorialBox;
