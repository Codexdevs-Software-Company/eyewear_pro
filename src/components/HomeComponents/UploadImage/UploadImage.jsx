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
      <label className='text-secondary bg-radial from-[#602A9A] to-[#000] text-center w-[90%] py-[2rem] cursor-pointer'> 
        Upload image
       <input
         type="file"
         accept="image/*"
         onChange={handleImageUpload}
         className="hidden"
      />
      </label>
       <Button varient="third" size="lg" onClick={handleCameraClick}>Camera</Button>
    </div>
  )
}
