import { FaLessThan } from "react-icons/fa6";
export default function PrevArrow({onClick}) {
  return (
    <div onClick={onClick} 
          className='absolute -left-10 border-1 border-[rgba(255,255,255,0.5)]  cursor-pointer text-secondary  top-1/2 transform -translate-y-1/2 z-10'
       >
      <FaLessThan size={33}/>
    </div>
  )
}
