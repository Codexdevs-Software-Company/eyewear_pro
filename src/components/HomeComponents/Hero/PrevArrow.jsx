export default function PrevArrow({onClick}) {
  return (
    <div onClick={onClick} 
          className='w-10 absolute -left-11 border-1 border-[rgba(255,255,255,0.5)]  cursor-pointer text-secondary  top-1/2 transform -translate-y-1/2 z-10'
       >
      <img src="images/prev.png" alt="prev" />
    </div>
  )
}
