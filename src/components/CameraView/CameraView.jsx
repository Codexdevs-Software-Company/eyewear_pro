import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGlass } from "../../context/GlassContext";
import Button from "../button/Button";
export default function Camera() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isCameraReady, setIsCameraReady] = useState(false); 
  const [uploadedImage, setUploadedImage] = useState(null);
  const { selectedFrame, selectCategory, nextFrame, prevFrame, resetFrames } =
    useGlass();
 
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setTimeout(() => {
          setIsCameraReady(true);
        }, 500);
      }
    } catch (error) {
      alert("Please allow camera access");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const handleClose = () => {
    stopCamera();
    const backTo = location.state?.from || "/home";
    navigate(backTo);
  };
  useEffect(() => {
    const image = location.state?.uploadedImage;
    if (image) {
      setUploadedImage(image);
    } else {
      openCamera();
    }
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="flex justify-center min-h-screen bg-secondary">
      <div className="flex flex-col gap-10 mr-4 mt-10">
        <Button onClick={handleClose} varient="primary" size="sm">
          Quit
        </Button>
        <Button
          onClick={() => selectCategory("sun")}
          varient="primary"
          size="sm">
          Sun
        </Button>
        <Button
          onClick={() => selectCategory("optical")}
          varient="primary"
          size="sm">
          Optical
        </Button>
        <Button
          onClick={() => selectCategory("antirad")}
          varient="primary"
          size="sm">
          Anti rad
        </Button>
      </div>

      <div className="w-[70%] flex flex-col items-center mt-4 ">
        <div className="h-[29rem] w-[40rem] flex justify-center relative">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="h-[100%] w-[100%] object-fill"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              className=" rounded h-[100%] w-[100%]"
            />
          )}
          {(uploadedImage || isCameraReady) && selectedFrame && (
            <img
              src={selectedFrame}
              alt="Frame"
              className="absolute top-25 left-20 h-[8rem] w-[30rem] object-contain pointer-events-none"
            />
          )}
        </div>
        <div className="flex gap-6">
          <Button onClick={resetFrames} varient="primary" size="sm">
            Reset
          </Button>
          <Button onClick={prevFrame} varient="primary" size="sm">
            Previous
          </Button>
          <Button onClick={nextFrame} varient="primary" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
