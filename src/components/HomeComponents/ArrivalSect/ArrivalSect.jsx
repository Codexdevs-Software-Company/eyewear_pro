import React from "react";
import { useState } from "react";
import Button from "../../button/Button";

export default function ArrivalSect() {
  const[showFullText , setShowFullText] = useState(false)

  
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="mt-28 w-screen h-80  flex ">
      <div className="w-[50%]">
        <h1 className="text-secondary font-Itim font-normal text-6xl ml-[2.31rem] mt-4">
          New Arrivals
        </h1>
      </div>
      <div className="w-[50%]  px-4 py-6 flex flex-col gap-2 ">
        <p className="text-secondary font-Inter font-medium  text-2xl w-lg ml-4 ">
          Unveil Our Newest Eyewear Arrivals and Elevate Your Look with the
          Latest Trends and Designs. Discover a World of Fashion-forward Frames
          Waiting Just for You!
        </p>
     
      {showFullText && (
        <p className="text-secondary font-Inter font-medium text-2xl w-lg ml-4 ">
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
