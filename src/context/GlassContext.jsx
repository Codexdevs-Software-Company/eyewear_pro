import { createContext, useContext, useState } from "react";
import sunData from "../Data/sunData";
import opticalData from "../Data/opticalData";
import antiradData from "../Data/antiradData";

const GlassContext = createContext();

export function GlassProvider({ children }) {
  const [frames, setFrames] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  const selectCategory = (category) => {
    let newFrames = [];
    if (category === "sun") newFrames = sunData;
    else if (category === "optical") newFrames = opticalData;
    else if (category === "antirad") newFrames = antiradData;

    setFrames(newFrames);
    setCurrentFrameIndex(0);
  };

  const nextFrame = () => {
    if (frames.length === 0) return alert("please select a frame first");
    else if (currentFrameIndex === frames.length - 1) return alert("You have reached the last frame");
    else setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
  };

  const prevFrame = () => {
    if (frames.length === 0) return alert("please select a frame first");
    else if (currentFrameIndex === 0) return alert("You have reached the first frame");
    else setCurrentFrameIndex((prev) => (prev - 1 + frames.length) % frames.length);
  };
  const setSingleFrame = (frameImage, category) => {
    let newFrames = [];
    if (category === "sun") newFrames = sunData;
    else if (category === "optical") newFrames = opticalData;
    else if (category === "antirad") newFrames = antiradData;

    setFrames(newFrames);

    const foundIndex = newFrames.findIndex((img) => img === frameImage);
    setCurrentFrameIndex(foundIndex !== -1 ? foundIndex : 0);
  };

  const resetFrames = () => {
    setFrames([]);
    setCurrentFrameIndex(0);
  };

  return (
    <GlassContext.Provider
      value={{
        frames,
        currentFrameIndex,
        selectedFrame: frames[currentFrameIndex],
        selectCategory,
        nextFrame,
        prevFrame,
        resetFrames,
        setSingleFrame,
      }}>
      {children}
    </GlassContext.Provider>
  );
}

export function useGlass() {
  return useContext(GlassContext);
}
