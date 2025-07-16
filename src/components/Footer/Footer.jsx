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
    <div className="mt-18 w-screen px-[2.31rem] pt-[.2rem] pb-[2rem] flex flex-col">
      <div className="border ">
        <h1 className="text-secondary font-Itim font-normal text-9xl ">Eyewear Pro</h1>
      </div>
      <div className="grid grid-cols-5  mt-20">
        <div className=" col-span-2 ">
          <div className="flex flex-col gap-4">
            <h3 className="text-secondary font-Inter font-normal text-2xl">
              STAY INSPIRED, STAY LUXURIOUS
            </h3>
            <h1 className=" text-secondary font-Inter  text-4xl text-center mr-22 font-normal">
              All Things are possible with the right glasses
            </h1>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-secondary font-Inter font-normal text-2xl ">Our Services</h2>
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
        <div className=" flex flex-col gap-10 items-center">
          <h2 className="text-secondary font-Inter font-normal text-2xl">Get IN Touch</h2>
          <div className="border-t-1 border-secondary w-42"></div>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <h2 className="text-secondary font-Inter  text-2xl font-normal">Location</h2>
          <h2 className="text-secondary font-Inter font-normal text-2xl">12346</h2>
          <h2 className="text-secondary font-Inter font-normal text-2xl">12346</h2>
        </div>
      </div>
      <div className="text-secondary mt-20  flex justify-between ">
        <h2 className="ml-32 text-2xl font-Inter font-normal">Privacy Policy</h2>
        <h2 className="text-2xl font-Inter font-normal "> Terms of Services</h2>
        <div className="flex gap-32">
           <div className="flex gap-6">
              <a
            href="https://www.facebook.com/"
            target="blank"
            className="bg-secondary p-1 rounded">
            <FaFacebookF size={30} color="#000" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="blank"
            className="bg-secondary p-1 rounded">
            <FaInstagram size={30} color="#000" />
          </a>
           </div>
        
          <button
            onClick={scrollToTop}
            className="border border-[rgba(255, 255, 255, 0.4)] cursor-pointer">
            <IoIosArrowUp size={40} color="#fff"/>
          </button>
        </div>
      </div>
    </div>
  );
}
