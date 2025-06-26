import { NavLink, Link } from "react-router-dom";
import { Menu,X } from "lucide-react";
import { useState } from "react";
export default function Nav() {
  const[open ,setOpen] = useState(false)

  const openNav = ()=> setOpen(!open)
  const closeNav = ()=> setOpen(false)

  return (
    // {header Section}
    <header className="w-screen h-[5rem]  flex  justify-between items-center   overflow-hidden">
      {/* Logo in large screens*/}
      <div className="ml-[.6rem] md:ml-[1.5rem] lg:ml-[2.31rem]  ">
        <Link
          to="/"
          className="text-[#fff] text-2xl  md:text-3xl lg:text-3xl xl:text-4xl">
          Eyewear Pro
        </Link>
      </div>

      {/* Nav  */}
      <nav className= { `
      ${open ? " translate-x-0"
        : "translate-x-full"} 
        flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-15 fixed top-0 right-0   mx-auto  lg:mx-0
        lg:static  h-[20rem] md:h-[25rem] lg:h-[100%] items-center py-8  lg:justify-end bg-primary transition-all ease-in-out duration-300 
        flex-1 lg:bg-gradient-to-r from-[#000] to-[#602A9A]  md:px-[2.31rem] w-full  lg:max-w-[45rem] lg:translate-x-0 `}>

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
            `px-4 py-2  lg:py-4 rounded-full transition-all duration-300 text-xl  md:text-3xl lg:text-2xl ${
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
            ` px-4 py-2 lg:py-4 rounded-full transition-all duration-300 text-xl  md:text-3xl lg:text-2xl ${
              isActive
                ? "bg-amber-400 text-purple-900 font-medium"
                : "  text-secondary "
            }`
          }>
          New Arrival
        </NavLink>
        <NavLink onClick={closeNav}
          to="/camera"
          className={({ isActive }) =>
            ` px-4 py-2 lg:py-4 rounded-full transition-all duration-300 text-xl md:text-3xl lg:text-2xl ${
              isActive
                ? "bg-amber-400 text-purple-900 font-medium"
                : "  text-secondary"
            }`
          }>
          Camera
        </NavLink>
      </nav>

      {/* Hamburgur Menu */}
      <button onClick={openNav} className={`text-secondary  mr-[.6rem] md:mr-[1.5rem]  lg:hidden z-30 ${open ? "hidden": "block"} `}>
          <Menu size = {35}/>
      </button>

      {/* Close icon */}
      <button onClick={closeNav} className={`md:mr-[1.5rem] lg:hidden z-30 text-secondary mr-[.6rem]   ${open ? "block" : "hidden"} `}>
          <X size={35}/>
      </button>
    </header>
  );
}
