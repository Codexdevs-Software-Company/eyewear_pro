export const openCamera = async (videoRef, streamRef, setIsCameraReady, setCameraError, setIsLoading) => {
  try {
    setIsLoading(true);
    setCameraError(null);
    
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      await new Promise((resolve) => {
        videoRef.current.onplaying = () => {
          setIsCameraReady(true);
          setIsLoading(false);
          resolve();
        };
   
        setTimeout(() => {
          setIsCameraReady(true);
          setIsLoading(false);
          resolve();
        }, 1000);
      });
    }
  } catch (error) {
    setIsLoading(false);
    
    if (error.name === 'NotAllowedError') {
      setCameraError('Your camera is blocked. Please allow from browser settings and reload the page.');
    } else if (error.name === 'NotFoundError' || error.name === 'OverconstrainedError') {
      setCameraError('No camera found. Please check your device and try again.');
    } else {
      setCameraError('Please allow camera access to use this feature');
    }
    
    return error.message;
  }
};
export const stopCamera = (streamRef) => {
  if (streamRef.current) {
    streamRef.current.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }
};
export const handleClose = (
  streamRef,
  videoRef,
  setIsCameraReady,
  navigate,
  location,
  setCameraError,
  resetFrames
) => {
  stopCamera(streamRef);
  if (videoRef.current) {
    videoRef.current.srcObject = null;
  }

 setIsCameraReady(false);
  setCameraError(null);
  resetFrames();

  navigate(location.state?.from || "/home");
  
};

export const calculateFramePosition = (setFramePosition) => {
  const previewContainer = document.querySelector(".preview-container");
  if (!previewContainer) return;

  setFramePosition({
    top: 0.25,
    left: 0.3,
    width: 0.4,
    height: 0.25,
  });
};

export const handleSave = async (
  selectedFrame,
  canvasRef,
  uploadedImage,
  isCameraReady,
  videoRef,
  framePosition,

) => {
  if (!selectedFrame) {
    alert("Please choose a frame first");
    return;
  }

  try {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const preview = document.querySelector(".preview-container");

    if (!preview) return;

    const width = preview.offsetWidth;
    const height = preview.offsetHeight;

    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    if (uploadedImage) {
      await new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = uploadedImage;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
          resolve();
        };
        img.onerror = (e) => {
          console.error("Error loading image:", e);
          resolve();
        };
      });
    } else if (isCameraReady && videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, width, height);
    }

    await new Promise((resolve) => {
      const frameImg = new Image();
      frameImg.crossOrigin = "Anonymous";
      frameImg.src = selectedFrame;
      frameImg.onload = () => {
        ctx.drawImage(
          frameImg,
          framePosition.left * width,
          framePosition.top * height,
          framePosition.width * width,
          framePosition.height * height
        );
        resolve();
      };
      frameImg.onerror = (e) => {
        console.error("Error loading frame:", e);
        resolve();
      };
    });

    const link = document.createElement("a");
    link.download = `generated_image_${Date.now()}.webp`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Error saving image:", error);
    alert("Could not save image. Please try again.");
  }
};
