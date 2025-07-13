import React from "react";
import { FiCopy } from "react-icons/fi";

interface PaletteProps {
  colors: string[];
}

const Palette: React.FC<PaletteProps> = ({ colors }) => {
  // Function to copy color to clipboard
  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    alert(`Copied: ${color}`); // Optional feedback for the user
  };

  return (
    <div className="flex flex-wrap gap-4 mt-4 font-poppins justify-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className="relative group md:w-40 md:h-40 sm:w-24 sm:h-24 w-32 h-32 rounded-lg sm:rounded-md flex flex-col items-center justify-center text-white cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => copyToClipboard(color)} // Copy color on click
        >
          {/* Display hex value */}
          <p className="text-sm font-normal sm:text-xs">{color}</p>

          {/* Copy Icon, visible on hover */}
          <div className="absolute flex items-center justify-center w-full bottom-2 transition-all duration-300">
            <FiCopy className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Palette;
