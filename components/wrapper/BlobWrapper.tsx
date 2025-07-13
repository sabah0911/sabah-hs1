import React from "react";

interface BlobWrapperProps {
  palette: string[]; // Use palette directly instead of generating colors
  children: React.ReactNode; // Content inside the wrapper
}

const BlobWrapper: React.FC<BlobWrapperProps> = ({ palette, children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden mt-20">
      {/* Blob 1 */}
      {palette[0] && (
        <div
          className="absolute rounded-full mix-blend-multiply animate-float 
                     w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72"
          style={{
            backgroundColor: palette[0],
            top: "15%",
            left: "5%",
          }}
        ></div>
      )}
      {/* Blob 2 */}
      {palette[1] && (
        <div
          className="absolute rounded-full mix-blend-multiply animate-float 
                     w-48 h-48 sm:w-64 sm:h-64 lg:w-48 lg:h-48"
          style={{
            backgroundColor: palette[1],
            top: "50%",
            left: "70%",
          }}
        ></div>
      )}
      {/* Blob 3 */}
      {palette[2] && (
        <div
          className="absolute rounded-full mix-blend-multiply animate-float 
                     w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
          style={{
            backgroundColor: palette[2],
            top: "10%",
            left: "80%",
          }}
        ></div>
      )}
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlobWrapper;
