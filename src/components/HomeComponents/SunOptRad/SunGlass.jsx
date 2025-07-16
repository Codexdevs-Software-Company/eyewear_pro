import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SunGlass({currElemnt}) {
 const{pic , title,id  } = currElemnt
   const navigate = useNavigate();

  const handleSunGlassClick = () => {
    if (id === 1 ){ navigate("/sun");}
    else if (id === 2) navigate("/optical");
    else if (id === 3) navigate("/anti-rad");
  };
  return (
    <div className='mx-[2.31rem] w-[100%]  flex flex-col items-center gap-6' >
       <div className='w-[100%] ' onClick={handleSunGlassClick} >
         <img className='cursor-pointer object-fill' src={pic} alt={title} />
       </div>
       <p className='text-secondary cursor-pointer font-Inter font-normal text-4xl' onClick={handleSunGlassClick}>{title}</p>
    </div>
  )
}
