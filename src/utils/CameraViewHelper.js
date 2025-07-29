const openCamera = async (videoRef, streamRef,setIsCameraReady) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setTimeout(() => setIsCameraReady(true), 500);
    }
  } catch (error) {
    alert("Please allow camera access to use this feature");
  }
};

const stopCamera = (streamRef) => {
  if (streamRef.current) {
    streamRef.current.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }
};

const handleClose = (streamRef, navigate, location) => {
  stopCamera(streamRef);
  navigate(location.state?.from || "/home");
};

 const calculateFramePosition = (setFramePosition) => {
  const previewContainer = document.querySelector(".preview-container");
  if (!previewContainer) return;


  setFramePosition({
      top: 0.25, 
      left: 0.3,
      width: 0.4,
      height: 0.25,
  });
};

const handleSave = async (
  selectedFrame,
  canvasRef,
  uploadedImage,
  isCameraReady,
  videoRef,
  framePosition
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
    link.download = `glasses-try-on-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Error saving image:", error);
    alert("Could not save image. Please try again.");
  }
};
export {
  openCamera,
  stopCamera,
  handleClose,
  calculateFramePosition,
  handleSave,
};
