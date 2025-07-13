"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { FaMagic, FaExclamationCircle } from "react-icons/fa"; // Import icons

interface ColorSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSuggestionModal: React.FC<ColorSuggestionModalProps> = ({
  isOpen,
  onClose,
  suggestedColor,
  onSelectColor,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen font-poppins">
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
          {/* Title with Invalid Icon */}
          <Dialog.Title className="flex items-center gap-2 text-lg font-montserrat font-semibold text-gray-600">
            <FaExclamationCircle className="text-red-500" /> {/* Invalid icon */}
            Invalid Hex Value
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            You entered an invalid hex value. Would you like to use this
            suggested color instead?
          </Dialog.Description>
          {/* Suggested Color Section */}
          <div
            className="mt-4 flex justify-between items-center gap-2 px-4 py-2 "
          >
            <span className="text-gray-900">Suggested Color:</span>
            <span>{suggestedColor}</span>
            <div className="h-4 w-20"            style={{ backgroundColor: suggestedColor }}></div>
          </div>
          {/* Action Buttons */}
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => onSelectColor(suggestedColor)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500 text-white rounded-md text-sm"
            >
              <FaMagic /> {/* Magic wand icon */}
              Use Color
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ColorSuggestionModal;
