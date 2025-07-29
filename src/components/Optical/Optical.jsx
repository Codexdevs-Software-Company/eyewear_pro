import Button from "../button/Button"
import opticalData from "../../Data/opticalData";
import { useNavigate } from "react-router-dom";
import { useGlass } from "../../context/GlassContext";
export default function Optical() {
   const navigate = useNavigate()
  const {setSingleFrame } = useGlass();
    const handleUse = (frameImage) => {
    setSingleFrame(frameImage ,"optical");
    navigate("/camera", { state: { from: location.pathname } });
  };
  return (
    <div className="bg-secondary">
      <div className="w-screen h-42 md:h-auto">
        
            <img
                src= "images/OpticalImg.webp" alt="Sun-Glass"
                 className="h-[100%] w-full object-fill"
             />
       
      </div>
      <div className="w-screen py-12 md:py-16 md:px-[2.31rem] ">
       <div  className="flex  justify-center items-center w-[100%] gap-8 md:gap-28 flex-wrap">
        {
            opticalData.map((currImg,index)=>(
                    <div key={index} className="flex flex-col justify-center items-center">
                         <img src={currImg} alt={`glass ${index}`} className="w-50 h-35 md:w-78 md:h-60" />
                         <Button onClick={()=>{handleUse(currImg)}} varient="primary" size="xl" className="mr-8 ">Use</Button>
                    </div>                
            ))
        }
         </div>
      </div>
    </div>
  );
}
