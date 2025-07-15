import { FaGreaterThan } from "react-icons/fa6";
export default function NextArrow({onClick}) {
  return (
    <div onClick={onClick} 
          className='absolute -right-10 border border-amber-50 cursor-pointer text-secondary top-1/2 transform -translate-y-1/2 z-10'
          >
     <FaGreaterThan size={33} />
    </div>
  )
}
