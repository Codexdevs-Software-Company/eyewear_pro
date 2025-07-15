import Button from "../button/Button"
import antiradData from "../../Data/antiradData";
import { useNavigate } from "react-router-dom";
import { useGlass } from "../../context/GlassContext";
export default function Optical() {
   const navigate = useNavigate()
  const {setSingleFrame } = useGlass();
    const handleUse = (frameImage) => {
    setSingleFrame(frameImage ,"antirad");
    navigate("/camera", { state: { from: location.pathname } });
  };
  return (
    <div className="bg-secondary">
      <div className="w-screen ">
        
            <img
                src= "images/AntiradImg.png" alt="Sun-Glass"
                 className="object-fill"
             />
       
      </div>
      <div className="w-screen py-16 px-[2.31rem] ">
        <div  className="flex  justify-center items-center w-[100%] gap-28 flex-wrap ">
        {
            antiradData.map((currImg,index)=>(
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
