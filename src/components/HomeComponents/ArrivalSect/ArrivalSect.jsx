import React from "react";
import { useState } from "react";
import Button from "../../button/Button";

export default function ArrivalSect() {
  const[showFullText , setShowFullText] = useState(false)

  
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="mt-24 md:mt-42 lg:mt-28 w-screen lg:h-80  flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-[50%] flex justify-center lg:block">
        <h1 className="text-secondary font-Itim font-normal text-3xl  md:text-6xl lg:ml-[2.31rem] mt-4">
          New Arrivals
        </h1>
      </div>
      <div className="w-full lg:w-[50%]  px-4 lg:px-0 py-6 flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-2">
        <p className="text-secondary font-Inter font-medium text-sm  md:ml-[1.5rem] md:text-3xl lg:text-2xl lg:w-lg lg:ml-4 ">
          Unveil Our Newest Eyewear Arrivals and Elevate Your Look with the
          Latest Trends and Designs. Discover a World of Fashion-forward Frames
          Waiting Just for You!
        </p>
     
      {showFullText && (
        <p className="text-secondary font-Inter font-medium w-full text-sm  md:text-3xl md:ml-[1.5rem] lg:px-0 lg:text-2xl lg:w-lg lg:ml-4 ">
          Search A collections of various eyewear designs showcasing different styles and layouts.
        </p>
      )}
        <Button onClick={toggleText} varient="primary" size="sm">
          {showFullText ? "Show Less": "Learn More"} 
        </Button>
      </div>
    </div>
  );
}
