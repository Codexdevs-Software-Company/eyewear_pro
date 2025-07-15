import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide"
import NextArrow from './NextArrow';
import PrevArrow from './Prevarrow';
import slideData from '../../../Data/slideData';
export default function SliderComponent() {


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
