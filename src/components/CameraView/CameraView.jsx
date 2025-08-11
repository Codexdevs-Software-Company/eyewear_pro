import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGlass } from "../../context/GlassContext";
import Button from "../button/Button";
import {
  openCamera,
  stopCamera,
  handleClose as closeHandler,
  calculateFramePosition,
  handleSave as saveHandler,
} from "../../utils/CameraViewHelper";
export default function CameraView() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const frameImageRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedFrame, selectCategory, nextFrame, prevFrame, resetFrames } =
    useGlass();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
    const [cameraError, setCameraError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [framePosition, setFramePosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const image = location.state?.uploadedImage;
    if (image) {
      setUploadedImage(image);
    } else {
      openCamera(
        videoRef,
        streamRef,
        setIsCameraReady,
        setCameraError,
        setIsLoading
      );
    }
    calculateFramePosition(setFramePosition);

    const handleResize = () => calculateFramePosition(setFramePosition);
    window.addEventListener("resize", handleResize);
    return () => {
      stopCamera(streamRef);
      window.addEventListener("resize", handleResize);
      resetFrames();
    };
  }, []);

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center  w-screen  relative bg-secondary pb-10">
      <div className="flex flex-col justify-center items-center   gap-2 md:gap-6 lg:gap-10  md:ml-8 lg:mr-24 w-full md:w-[30%] lg:w-[20%] order-2 md:order-none">
        <Button
          onClick={() =>
            closeHandler(
              streamRef,
              videoRef,
              setIsCameraReady,
              navigate,
              location,
              setCameraError,
              resetFrames
            )
          }
          varient="primary"
          size="sm"
          className="order-4">
          Quit
        </Button>
        <Button
          onClick={() =>
            saveHandler(
              selectedFrame,
              canvasRef,
              uploadedImage,
              isCameraReady,
              videoRef,
              framePosition,
              
            )
          }
          varient="primary"
          size="sm"
          className="order-3">
          Save
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

      <div className="w-full  lg:w-[50%] relative flex flex-col justify-center md:ml-6 lg:ml-0  md:mt-8 lg:mt-4  ">
        <div className="preview-container w-full h-[22rem] lg:h-[28rem] lg:max-w-[700px]  flex justify-center overflow-hidden relative ">
           {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          )}
          {cameraError ? (
            <div className=" text-lg md:text-2xl text-center p-4 text-red-500 font-semibold flex flex-col justify-center items-center">
              {cameraError}
              <br />
            </div>
          )
          : uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className=" h-full  object-contain"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full mt-3 h-[100%] ${isLoading ? 'opacity-50' : ''}`}
            />
          )}
          {(uploadedImage || isCameraReady) && selectedFrame && (
            <img
              ref={frameImageRef}
              src={selectedFrame}
              alt="Frame overlay"
              className="absolute pointer-events-none object-contain"
              style={{
                top: `${framePosition.top * 100}%`,
                left: `${framePosition.left * 100}%`,
                width: `${framePosition.width * 100}%`,
                height: `${framePosition.height * 100}%`,
              }}
            />
          )}
          <canvas className="hidden" ref={canvasRef} id="your-canvas-id" />
         
         </div>
         <div className=" flex justify-center w-full flex-wrap lg:flex-nowrap gap-2 lg:gap-6">
          <Button
            onClick={resetFrames}
            varient="primary"
            size="sm"
            className="order-3">
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
