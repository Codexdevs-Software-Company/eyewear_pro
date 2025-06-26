import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide"
import NextArrow from './NextArrow';
import PrevArrow from './Prevarrow';

export default function SliderComponent() {
  const slideData = [
    {
      type: "slide1",
      imgUrl: "../../../public/images/sliderPic1.png",
      heading1: "sun",
      heading2: "optical",
      heading3: "anti rad",
      para1: "The lightest optical frames around.",
      heading4: "Discover your ideal eyewear style",
      para2: `“We Specialize in discovering your ideal
               match. Discover the transformative impact
               a perfect pairing can have. Let’s uncover
               your collaboratively”`
    },
    {
      type: "slide2",
      imgUrl: "../../../public/images/slidePic2.png",
      heading2: "optical",
      para1: "Best choice of this week",
      heading4: "EYEWEAR"
    },
      {
      type: "slide3",
      imgUrl: "../../../public/images/slidePic3.png",
      heading2: "anti rad",
      para1: "Fall 2025",
      heading4: "COLLECTION"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: < PrevArrow />
  };

  return (
    <div className=" ml-[3rem] mr-[4rem]">
      <Slider {...settings} className="custom-dots">
        {
          slideData.map((slide , index)=>(
              <Slide key={index} {...slide}/>
          ))
        }
      </Slider>
    </div>
  );
}
