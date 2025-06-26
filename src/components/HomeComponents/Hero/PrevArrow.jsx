import { ChevronLeft } from 'lucide-react'
export default function PrevArrow({onClick}) {
  return (
    <div onClick={onClick} 
          className='absolute -left-12 border border-amber-50  cursor-pointer text-secondary  top-1/2 transform -translate-y-1/2 z-10'
       >
     < ChevronLeft size={36} />
    </div>
  )
}
