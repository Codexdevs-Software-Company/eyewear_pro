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
      <div className="relative bg-radial from-[#602A9A] to-black  w-[100%] h-[40rem] flex justify-center  px-2 ">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            className="w-[1000px] h-[600px]"
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

        <div className="flex flex-col  justify-center gap-4 ">
          <div className="flex gap-1 justify-end">
            <h3 className="roundedButton font-Itim font-normal text-2xl">{heading1}</h3>
            <h3 className="roundedButton font-Itim font-normal text-2xl">{heading2}</h3>
            <h3 className="roundedButton ">{heading3}</h3>
          </div>
          <div className="flex">
            <p className="sliderstyle text-[1.25rem]">{para1}</p>
          </div>
        </div>
        <div className=" flex  justify-center  w-[40%] relative ">
          <img
            className="  h-[100%] w-[100%] absolute bottom-12"
            src={imgUrl}
            alt={heading1}
          />
        </div>
        <div className="flex flex-col justify-center  w-[30%] gap-0.5">
          <div className="w-[100%] font-semibold text-2xl">
            <h2 className="sliderstyle text-5xl ">{heading4}</h2>
          </div>
          <div>
            <p className="sliderstyle text[1.25rem]">{para2}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === "slide2") {
    return (
      <div className="relative bg-radial from-[#602A9A] to-black  w-[100%] h-[40rem] flex  justify-center px-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            className="w-[1000px] h-[600px]"
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

        <div className=" flex  justify-start  w-[50%] relative ">
          <img
            className="  h-[100%] w-[100%] absolute bottom-5"
            src={imgUrl}
            alt={heading2}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-[50%] ">
          <h4 className="sliderstyle text-5xl">{para1}</h4>
          <h1 className="sliderstyle text-8xl ">{heading4}</h1>
          <h3 className="roundedButton  ">{heading2}</h3>
        </div>
      </div>
    );
  } else if (type === "slide3") {
    return (
      <div className="relative bg-radial from-[#602A9A] to-black  w-[100%] h-[40rem] flex flex-row-reverse  justify-center px-2 0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            className="w-[1000px] h-[600px]"
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

        <div className=" flex  justify-start  w-[50%] relative ">
          <img
            className="  h-[100%] w-[100%] absolute bottom-5"
            src={imgUrl}
            alt={heading2}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-[50%] ">
          <h4 className="sliderstyle text-8xl">{para1}</h4>
          <h1 className="font-Inter font-light text-8xl text-secondary">{heading4}</h1>
          <h3 className="roundedButton">{heading2}</h3>
        </div>
      </div>
    );
  }
}
