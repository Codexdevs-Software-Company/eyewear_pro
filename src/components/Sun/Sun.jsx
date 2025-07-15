import Button from "../button/Button"
import sunData from "../../Data/sunData";
import { useGlass } from "../../context/GlassContext";
import { useNavigate } from "react-router-dom";
export default function Sun() { 
  const navigate = useNavigate()
  const {setSingleFrame } = useGlass();
    const handleUse = (frameImage) => {
    setSingleFrame(frameImage ,"sun");
    navigate("/camera", { state: { from: location.pathname } });
  };
  return (
    <div className="bg-secondary">
      <div className="w-screen">
        
            <img
                src= "images/SunGlassImg.png" alt="Sun-Glass"
                 className="object-fill"
             />
       
      </div>
      <div className="w-screen py-16 px-[2.31rem] ">
          <div  className="flex  justify-center items-center gap-28 flex-wrap ">
        {
            sunData.map((currImg,index)=>(
                    <div key={index} className="flex flex-col items-center">
                         <img src={currImg} alt={`glass ${index}`} className="w-78 h-60" />
                         <Button onClick={()=>{handleUse(currImg)}} varient="primary" size="xl">Use</Button>
                    </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
