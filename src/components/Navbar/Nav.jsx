import { NavLink, Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="w-screen h-[5rem] bg-[#000] flex justify-between items-center  overflow-hidden">
      <div>
        <Link to="/Home" className="text-[#fff] ml-[2.31rem] text-5xl ">
          Eyewear Pro
        </Link>
      </div>
      <div className="w-[31.25rem] h-[100%] bg-radial   from-[#602A9A] to-black">
        <nav className="flex gap-15  h-[5rem] items-center justify-center">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-amber-400 text-purple-900 font-medium"
                  : "  text-white"
              }`
            }>
            Home
          </NavLink>
          <NavLink to="/New_Arrival"   className={({ isActive }) =>
              ` px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-amber-400 text-purple-900 font-medium"
                  : "  text-white "
              }`
            }>
            New Arrival
          </NavLink>
          <NavLink to="/Camera"   className={({ isActive }) =>
              ` px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-amber-400 text-purple-900 font-medium"
                  : "  text-white"
              }`
            }>
            Camera
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
