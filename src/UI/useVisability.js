import { useState, useEffect } from "react";

// Hook for tracking elements visibality 
export function useVisibility(elementsLength) {
  const [visibilities, setVisibilities] = useState(Array(elementsLength).fill(0));

  const updateVisibilities = () => {
    const newVisibilities = Array.from(document.querySelectorAll(".card")).map((card) => {
      const rect = card.getBoundingClientRect();
      const cardHeight = rect.height;
      const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
      return visibleHeight / cardHeight;
    });
    setVisibilities(newVisibilities);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateVisibilities);
    updateVisibilities(); 
    return () => window.removeEventListener("scroll", updateVisibilities); 
  }, [elementsLength]); 

  return visibilities;
}
