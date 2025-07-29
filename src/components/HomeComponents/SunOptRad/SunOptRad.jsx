import SunGlass from './SunGlass'
export default function SunOptrad() {
  const glassesData = [
    {
        id:1,
        pic:"images/glassPic1.webp",
        title : "sun"
    },
    {
        id:2,
        pic:"images/glassPic2.webp",
        title : "optical"
    },
    {
      id:3,
      pic: "images/glassPic3.webp",
      title : "anti-rad"
    }
  ]

  return (
    <div className="mt-24 md:mt-42 lg:mt-28 w-screen h-auto flex justify-center flex-wrap lg:flex-nowrap">
        {
           glassesData.map((currElemnt)=>(
             <SunGlass key={currElemnt.id} currElemnt={currElemnt} />
           ))
        }
       
    </div>
  )
}