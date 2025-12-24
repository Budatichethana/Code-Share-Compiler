import { useState, useEffect } from "react";

export const useOutputPanelResize = (
  initialHeight = 5,
  minHeight = 5,
  maxHeight = 80
) => {
  const [panelHeight, setPanelHeight] = useState(initialHeight);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      // Calculate height based on distance from bottom
      const windowHeight = window.innerHeight;
      const distanceFromBottom = windowHeight - e.clientY;
      const heightInVh = (distanceFromBottom / windowHeight) * 100;
      const clampedHeight = Math.min(
        Math.max(heightInVh, minHeight),
        maxHeight
      );
      setPanelHeight(clampedHeight);
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, minHeight, maxHeight]);

  const startDrag = () => setIsDragging(true);

  return {
    panelHeight,
    isDragging,
    startDrag,
  };
};
