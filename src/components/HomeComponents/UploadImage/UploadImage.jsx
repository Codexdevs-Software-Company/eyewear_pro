import Button from '../../button/Button'
import { useNavigate } from 'react-router-dom'
export default function UploadImage() {
  const navigate = useNavigate();
  const handleCameraClick = ()=>{
    navigate("/camera")
  }
  
  const handleImageUpload = (e) => {
    console.log("upload image button clicked ");
    
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      navigate("/camera", { state: { uploadedImage: imageUrl } });
    }
  };
  return (
    <div className='w-screen mt-28  flex flex-col justify-center items-center gap-[1.75rem]'>
      <label className='relative  text-secondary font-Itim font-normal text-[64px] bg-gradient-to-r from-[#000] via-[#602A9A] to-[#000] text-center w-full py-[2rem] cursor-pointer'> 
        Upload image
       <input
         type="file"
         accept="image/*"
         onChange={handleImageUpload}
         className="hidden"
      />
        <svg className="absolute top-0 w-full h-full" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="350" cy="110" rx="780" ry="100" stroke="white" strokeOpacity="0.1" strokeWidth=".2" />
          <ellipse cx="350" cy="110" rx="650" ry="80" stroke="white" strokeDasharray="6 6" strokeOpacity="0.1" strokeWidth=".3" />
          <ellipse cx="350" cy="110" rx="490" ry="65" stroke="white" strokeOpacity="0.2" strokeWidth=".5" />
        </svg>
      </label>
      <div className='w-full relative flex justify-center cursor-pointer' onClick={handleCameraClick}>
        <svg className="absolute top-0 w-full h-full" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="350" cy="110" rx="780" ry="100" stroke="white" strokeOpacity="0.1" strokeWidth=".2" />
          <ellipse cx="350" cy="110" rx="650" ry="80" stroke="white" strokeDasharray="6 6" strokeOpacity="0.1" strokeWidth=".3" />
          <ellipse cx="350" cy="110" rx="490" ry="65" stroke="white" strokeOpacity="0.2" strokeWidth=".5" />
        </svg>
         <Button varient="third" size="lg" >Camera</Button>
         </div>
     
    </div>
  )
}
