export default function Slide({
  type,
  imgUrl,
  heading1,
  heading2,
  heading3,
  para1,
  heading4,
  para2,
}) {
  if (type === "slide1") {
    return (
      <div className="  relative bg-radial from-[#602A9A] to-black  w-full h-auto  
      md:h-[80vh] lg:h-[80vh] flex flex-col items-center justify-center gap-4 lg:flex-row lg:px-10 ">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            className="w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] "
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse
              cx="500"
              cy="300"
              rx="500"
              ry="220"
              stroke="white"
              strokeOpacity="0.05"
              strokeWidth=".2"
            />
            <ellipse
              cx="500"
              cy="300"
              rx="400"
              ry="180"
              stroke="white"
              strokeDasharray="5 5"
              strokeOpacity="0.07"
              strokeWidth=".3"
            />
            <ellipse
              cx="500"
              cy="300"
              rx="300"
              ry="120"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth=".5"
            />
          </svg>
        </div>

        <div className="  flex flex-col justify-center items-center gap-2 md:gap-4  w-full  lg:h-full lg:w-auto
          text-center ">
          <div className="flex justify-center items-center gap-2 md:gap-8 w-full lg:gap-2">
            <h3 className="roundedButton w-[5.5rem] text-sm md:w-[10rem] md:text-3xl lg:w-[8rem]">{heading1}</h3>
            <h3 className="roundedButton w-[5.5rem] text-sm md:w-[10rem] md:text-3xl lg:w-[8rem]">{heading2}</h3>
            <h3 className="roundedButton w-[5.5rem] text-sm md:w-[10rem] md:text-3xl lg:w-[8rem]">{heading3}</h3>
          </div>
          <div className="flex w-full justify-center items-center">
            <p className="sliderstyle text-sm md:text-[2rem] lg:text-[1.25rem]">{para1}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-[85%] md:h-[60%] lg:w-[30%] lg:h-full z-10 md:relative text-secondary">
          <img
            className="  h-[12rem] w-[10rem] md:h-full  md:w-[25rem] lg:w-full  object-fill static  md:mt-0 md:absolute md:bottom-14  "
            src={imgUrl}
            alt={heading1}
          />
        </div>
        <div className=" relative flex flex-col justify-center items-center w-full md:z-12 px-6 lg:px-0 md:w-auto lg:w-[30%] lg:h-full gap-0.5 md:gap-2 text-center lg:text-left">
          <div className="static lg:absolute lg:top-30 lg:-left-10  w-full lg:flex lg:justify-center lg:items-center">
            <h2 className="sliderstyle font-semibold text-sm md:text-4xl lg:text-5xl ">{heading4}</h2>
          </div>
          <div className="static lg:absolute lg:top-66 lg:-left-10 lg:flex lg:justify-center lg:items-center w-full">
            <p className="sliderstyle  text-[.6rem] md:text-2xl lg:text-[1.25rem]">{para2}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === "slide2") {
    return (
      <div className=" relative bg-radial from-[#602A9A] to-black  w-full h-auto
      md:h-[80vh] lg:h-[80vh] flex flex-col justify-center items-center gap-2 md:gap-10 lg:gap-12 lg:flex-row pb-6 lg:pb-0 lg:px-8">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            className="w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse
              cx="500"
              cy="300"
              rx="500"
              ry="220"
              stroke="white"
              strokeOpacity="0.05"
              strokeWidth=".2"
            />
            <ellipse
              cx="500"
              cy="300"
              rx="400"
              ry="180"
              stroke="white"
              strokeDasharray="5 5"
              strokeOpacity="0.07"
              strokeWidth=".3"
            />
            <ellipse
              cx="500"
              cy="300"
              rx="300"
              ry="120"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth=".5"
            />
          </svg>
        </div>

        <div className= " flex justify-center items-center w-full md:w-[70%] md:h-[60%] lg:w-[30%] lg:h-full  relative ">
          <img
            className=" w-[10rem] h-[12rem] md:h-[30rem]  md:w-[25rem] lg:w-full object-cover  "
            src={imgUrl}
            alt={heading2}
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-4 w-full lg:w-auto lg:h-full   relative">
          <h4 className="sliderstyle text-sm md:text-4xl">{para1}</h4>
          <h1 className="sliderstyle text-2xl  md:text-5xl ">{heading4}</h1>
          <h3 className="roundedButton w-[5.5rem] text-sm md:w-[10rem] md:text-3xl lg:w-[8rem] lg:text-2xl">{heading2}</h3>
        </div>
      </div>
    );
  } else if (type === "slide3") {
    return (
      <div className=" relative bg-radial from-[#602A9A] to-black   w-full h-auto  
      md:h-[80vh] lg:h-[80vh] flex flex-col-reverse  pb-6  md:pb-0  lg:flex-row-reverse gap-6 lg:gap-10 justify-center items-center  md:px-8">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            className="w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse
              cx="500"
              cy="300"
              rx="500"
              ry="220"
              stroke="white"
              strokeOpacity="0.05"
              strokeWidth=".2"
            />
            <ellipse
              cx="500"
              cy="300"
              rx="400"
              ry="180"
              stroke="white"
              strokeDasharray="5 5"
              strokeOpacity="0.07"
              strokeWidth=".3"
            />
            <ellipse
              cx="500"
              cy="300"
              rx="300"
              ry="120"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth=".5"
            />
          </svg>
        </div>

        <div className=" flex justify-center items-center 
          w-full md:w-[65%] md:h-[60%] lg:w-[30%] lg:h-full relative ">
          <img
            className=" w-[10rem] h-[12rem] md:h-[35rem] lg:h-full md:w-full object-cover  "
            src={imgUrl}
            alt={heading2}
          />
        </div>
        <div className=" flex flex-col  justify-center items-center gap-4 w-full  lg:w-auto">
          <h4 className="sliderstyle text-xl md:text-4xl lg:text-8xl">{para1}</h4>
          <h1 className="font-Inter text-xl font-light md:text-5xl lg:text-8xl text-secondary">{heading4}</h1>
          <h3 className="roundedButton w-[5.5rem] text-sm md:w-[10rem] md:text-3xl lg:w-[8rem] lg:text-2xl">{heading2}</h3>
        </div>
      </div>
    );
  }
}
