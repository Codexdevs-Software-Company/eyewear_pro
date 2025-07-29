// import { FaGreaterThan } from "react-icons/fa6";
export default function NextArrow({onClick}) {
  return (
    <div onClick={onClick} 
          className='w-6 md:w-10 absolute -right-8 md:-right-11 border-1 border-[rgba(255,255,255,0.5)]  cursor-pointer text-secondary top-1/2 transform -translate-y-1/2 z-10'
          >
         <img src="images/next.webp" alt="next" />
    </div>
  )
}
