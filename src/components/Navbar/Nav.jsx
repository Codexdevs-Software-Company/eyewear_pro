import { NavLink, Link,useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export default function Nav() {
  const[open ,setOpen] = useState(false)
  const openNav = ()=> setOpen(!open)
  const closeNav = ()=> setOpen(false)
  const pathName = useLocation()
  return (
    // {header Section}
    <header className="w-screen h-[5rem]  lg:h-30  flex  justify-between items-center   overflow-hidden ">
      {/* Logo in large screens*/}
      <div className="ml-[.75rem] md:ml-[1.5rem] lg:ml-[2.31rem]">
        <Link
          to="/"
          className="text-[#fff] text-2xl  md:text-4xl lg:text-5xl  font-Itim font-normal">
          Eyewear Pro
        </Link>
      </div>

      {/* Nav  */}
      <nav className= { `
      ${open ? " translate-x-0"
        : "translate-x-full"} 
        lg:relative flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-14 fixed top-0 right-0   mx-auto  lg:mx-0
        h-[20rem] md:h-[25rem] lg:h-[100%] items-center py-8  lg:justify-center  bg-primary transition-all ease-in-out duration-300 
        flex-1 lg:bg-gradient-to-r from-[#000] via-[#602A9A] to-[#000]   md:px-[2.31rem] w-full  lg:max-w-[47rem] lg:translate-x-0   z-50`}>
        <div className="hidden lg:absolute lg:left-18   lg:flex lg:items-center  md:-z-4">
        <svg className=" w-[800px]  h-[220px]"  viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="350" cy="110" rx="310" ry="55"  stroke="white" strokeOpacity="0.1" strokeWidth="0.2" />
          <ellipse cx="350" cy="110" rx="280" ry="45" stroke="white" strokeDasharray="6 6" strokeOpacity="0.1" strokeWidth="0.3" />
          <ellipse cx="350" cy="110" rx="250" ry="40" stroke="white" strokeOpacity="0.1" strokeWidth=".7" />
        </svg>
      </div>
          {/* Logo for mobile */}
        <div className=" lg:hidden " >
          <Link onClick={closeNav}
            to="/"
            className={`text-secondary text-3xl  md:text-4xl lg:text-3xl xl:text-4xl `}>
            Eyewear Pro
          </Link>
        </div>
        <NavLink onClick={closeNav}
          to="/home"
          className={({ isActive }) =>
            `px-4 py-2  lg:py-2 lg:ml-25 rounded-full transition-all duration-300 text-xl  md:text-3xl lg:text-2xl ${
              isActive
                ? "bg-amber-400 text-purple-900 font-medium"
                : "  text-secondary"
            }`
          }>
          Home
        </NavLink>
        <NavLink onClick={closeNav}
          to="/new_Arrival"
          className={({ isActive }) =>
            ` px-4 py-2 lg:py-2 rounded-full transition-all duration-300 text-xl  md:text-3xl lg:text-2xl ${
              isActive
                ? "bg-amber-400 text-purple-900 font-medium"
                : "  text-secondary "
            }`
          }>
          New Arrival
        </NavLink>
        <NavLink onClick={closeNav}
          to="/camera"
          state={{ from: location.pathname }}
          className={({ isActive }) =>
            ` px-4 py-2 lg:py-2 rounded-full transition-all duration-300 text-xl md:text-3xl lg:text-2xl ${
              isActive
                ? "bg-amber-400 text-purple-900 font-medium"
                : "  text-secondary"
            }`
          }>
          Camera
        </NavLink>
      </nav>

      {/* Hamburgur Menu */}
      <button onClick={openNav} className={`text-secondary text-2xl md:text-4xl  mr-[.75rem] md:mr-[1.5rem]  lg:hidden z-51 ${open ? "hidden": "block"} `}>
         <RxHamburgerMenu  />
      </button>

      {/* Close icon */}
      <button onClick={closeNav} className={`md:mr-[1.5rem] lg:hidden z-51 text-2xl md:text-4xl text-secondary mr-[.75rem]   ${open ? "block" : "hidden"} `}>
         <IoMdClose />
      </button>
    </header>
  );
}
