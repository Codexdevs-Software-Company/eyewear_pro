import Herosect from "../components/HomeComponents/Hero/Herosect";
import ArrivalSect from "../components/HomeComponents/ArrivalSect/ArrivalSect";
import SunOptrad from "../components/HomeComponents/SunOptRad/SunOptrad";
import UploadImage from "../components/HomeComponents/UploadImage/UploadImage";


export default function Home(){

    return(
        <>
           <Herosect/>
           <ArrivalSect />
           <SunOptrad />
           <UploadImage />
        </>
       
    )
}