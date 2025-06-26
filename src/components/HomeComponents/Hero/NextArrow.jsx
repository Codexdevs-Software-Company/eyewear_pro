import React from 'react'
import {ChevronRight} from "lucide-react"
export default function NextArrow({onClick}) {
  return (
    <div onClick={onClick} 
          className='absolute -right-12 border border-amber-50 cursor-pointer text-secondary top-1/2 transform -translate-y-1/2 z-10'
          >
      <ChevronRight size={36} />
    </div>
  )
}
