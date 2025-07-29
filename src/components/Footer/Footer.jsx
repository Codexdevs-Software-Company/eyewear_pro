  import Button from "../button/Button";
  import { useNavigate } from "react-router-dom";
  import { FaFacebookF } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa6";
  import { IoIosArrowUp } from "react-icons/io";
  export default function Footer() {
    const navigate = useNavigate();

    const handleSunClick = () => {
      navigate("/sun");
    };
    const handleOpticalClick = () => {
      navigate("/optical");
    };
    const handleAntiradClick = () => {
      navigate("/anti-rad");
    };

    const scrollToTop = ()=>{
      window.scrollTo({
        top:0,
        behavior: "smooth"
    })
    }

    return (
      <div className="mt-18 w-screen px-4 md:px-[2.31rem] pt-[.2rem] pb-[2rem] flex flex-col">
        <div className="border ">
          <h1 className="text-secondary font-Itim font-normal text-4xl md:text-8xl lg:text-9xl ">Eyewear Pro</h1>
        </div>
        <div className=" grid grid-flow-row  grid-cols-2 gap-x-4 gap-y-6 md:gap-4  lg:grid-cols-5 lg:grid-rows-1 mt-8 md:mt-12 lg:mt-20">
          <div className="md:col-span-2 ">
            <div className=" flex flex-col gap-4">
              <h3 className="text-secondary font-Inter font-normal text-sm md:text-xl lg:text-2xl">
                STAY INSPIRED, STAY LUXURIOUS
              </h3>
              <h1 className=" text-secondary font-Inter w-full text-sm md:text-3xl lg:text-4xl  font-bold">
                All Things are possible with the right glasses
              </h1>
            </div>
          </div>
          <div className=" h-auto">
            <div className=" flex flex-col gap-2 md:gap-4 items-center ">
              <h2 className="text-secondary font-Inter font-bold text-xl  md:text-2xl ">Our Services</h2>
              <Button onClick={handleSunClick} varient="fourth" size="xl2">
                Sun
              </Button>
              <Button onClick={handleOpticalClick} varient="fourth" size="xl2">
                Optical
              </Button>
              <Button onClick={handleAntiradClick} varient="fourth" size="xl2">
                Anti rad
              </Button>
            </div>
          </div>
          <div className=" flex flex-col gap-8 md:gap-10 items-start md:items-center">
            <h2 className="text-secondary font-Inter font-normal text-xl md:text-2xl">Get In Touch</h2>
            <div className="border-t-1 border-secondary flex ml-3 w-24 md:w-42"></div>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <h2 className="text-secondary font-Inter text-sm  md:text-3xl font-bold">Location</h2>
            <h2 className="text-secondary font-Inter font-bold text-sm md:text-2xl">12346</h2>
            <h2 className="text-secondary font-Inter font-bold text-sm md:text-2xl">12346</h2>
          </div>
        </div>
        <div className="w-auto text-secondary mt-8 md:mt-20  flex items-center justify-between ">
          <h2 className="ml-[.75rem]  w-auto lg:ml-32 text-[.8rem] md:text-xl lg:text-2xl font-Inter font-bold">Privacy Policy</h2>
          <h2 className="w-auto text-[.8rem] md:text-xl lg:text-2xl font-Inter font-bold "> Terms of Services</h2>
          <div className="w-auto flex items-center gap-4 md:gap-32">
            <div className="flex gap-2 mr-4 md:mr-0 md:gap-6">
                <a
              href="https://www.facebook.com/"
              target="blank"
              className="bg-secondary text-2xl h-8 md:h-11  md:text-4xl p-1 rounded">
              <FaFacebookF  color="#000" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="bg-secondary text-2xl h-8 md:h-11 md:text-4xl p-1 rounded">
              <FaInstagram  color="#000" />
            </a>
            </div>
          
            <button
              onClick={scrollToTop}
              className="border border-[rgba(255, 255, 255, 0.4)] cursor-pointer text-3xl md:text-5xl mr-[.75rem] md:mr-0">
              <IoIosArrowUp  color="#fff"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
