export default function Slide({type,imgUrl,heading1,heading2,heading3,para1 ,heading4,para2}) {
    if(type ==="slide1"){
    return (
    <div className=' bg-radial from-[#602A9A] to-black  w-[100%] h-[30rem] flex justify-center  px-2 '>
           <div className='flex flex-col  justify-center gap-4 w-[25%]'>
               <div className='flex gap-1 justify-end'>
                   <h3 className='roundedButton'>{heading1}</h3>
                   <h3 className='roundedButton'>{heading2}</h3>
                   <h3 className='roundedButton'>{heading3}</h3>
               </div>
               <div className='flex justify-end' ><p className='text-secondary'>{para1}</p></div>
           </div>
           <div className=' flex  justify-center  w-[40%] relative '>
            <img className='  h-[100%] w-[100%] absolute bottom-12' src={imgUrl} alt={heading1} />
            </div>
           <div className='flex flex-col justify-center  w-[25%] gap-0.5' >
              <div className='w-[70%] font-semibold text-2xl'>
                <h2 className='text-secondary'>{heading4}</h2></div>
              <div><p className='text-secondary'>{para2}</p></div>
           </div>
    </div>
  )
}
else if(type === "slide2"){
  return(
    <div className=' bg-radial from-[#602A9A] to-black  w-[100%] h-[30rem] flex  justify-center px-20'>
            <div className=' flex  justify-start  w-[40%] relative '>
            <img className='  h-[100%] w-[100%] absolute bottom-5' src={imgUrl} alt={heading2} />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 w-[40%] '>
                 <h4 className='text-secondary text-4xl'>{para1}</h4>
                 <h1 className='text-secondary text-5xl'>{heading4}</h1>
                <h3 className='roundedButton'>{heading2}</h3>
            </div>
    </div>
    
  )
}
else if(type === "slide3"){
  return(
    <div className=' bg-radial from-[#602A9A] to-black  w-[100%] h-[30rem] flex flex-row-reverse  justify-center px-20'>
            <div className=' flex  justify-start  w-[40%] relative '>
            <img className='  h-[100%] w-[100%] absolute bottom-5' src={imgUrl} alt={heading2} />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 w-[40%] '>
                 <h4 className='text-secondary text-4xl'>{para1}</h4>
                 <h1 className='text-secondary text-5xl'>{heading4}</h1>
                <h3 className='roundedButton'>{heading2}</h3>
            </div>
    </div>
    
  )
}
}
