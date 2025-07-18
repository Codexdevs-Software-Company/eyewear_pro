import SunGlass from './SunGlass'
export default function SunOptrad() {
  const glassesData = [
    {
        id:1,
        pic:"images/glassPic1.png",
        title : "sun"
    },
    {
        id:2,
        pic:"images/glassPic2.png",
        title : "optical"
    },
    {
      id:3,
      pic: "images/glassPic1.png",
      title : "anti-rad"
    }
  ]

  return (
    <div className='mt-28 w-screen h-90 flex'>
        {
           glassesData.map((currElemnt)=>(
             <SunGlass key={currElemnt.id} currElemnt={currElemnt} />
           ))
        }
       
    </div>
  )
}