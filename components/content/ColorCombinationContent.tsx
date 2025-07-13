import React from "react";
import UseEffect1 from "../useeffect/UseEffect1";


interface ColorCombinationContentProps {
  heading: string;
  subheading: string;
  subheading_paragraph: string;
  first_heading: string;
  first_paragraph: string;
  second_heading: string;
  second_paragraph: string;
  third_heading: string;
  third_paragraph: string;
  fourth_heading: string;
  fourth_paragraph: string;
  fifth_heading: string;
  fifth_paragraph: string;
}

const ColorCombinationContent: React.FC<ColorCombinationContentProps> = ({
  heading,
  subheading,
  subheading_paragraph,
  first_heading,
  first_paragraph,
  second_heading,
  second_paragraph,
  third_heading,
  third_paragraph,
  fourth_heading,
  fourth_paragraph,
  fifth_heading,
  fifth_paragraph,
}) => {
  return (
    <div>
      {/* Main Heading */}
      <div>
        <UseEffect1 />
        <h1 className="flex justify-center items-center w-full text-5xl text-gray-900 font-poppins mt-10 mb-4">{heading}</h1>
        <h3 className="flex justify-center items-center text-xl font-semibold text-gray-850 font-poppins mt-8 mb-4">{subheading}</h3>
        <h5 className=" flex justify-center items-center text-lg text-gray-700 font-poppins mt-8">
          {subheading_paragraph}
        </h5>
      </div>

      {/* Sections */}
      {[ 
        { title: first_heading, content: first_paragraph },
        { title: second_heading, content: second_paragraph },
        { title: third_heading, content: third_paragraph },
        { title: fourth_heading, content: fourth_paragraph },
        { title: fifth_heading, content: fifth_paragraph },
      ].map((section, index) => (
        <div key={index}>
          <h3 className="font-bold text-gray-800 font-poppins mt-8 mb-4 ">{section.title}</h3>
          <p className="text-lg text-gray-600 font-poppins mt-6 mb-4">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorCombinationContent;
