import React, { useState, useEffect, useRef } from "react";

export default function UpButton({ navbarRef }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      setIsVisible(window.scrollY > navbarHeight);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="scrollToTop"
      style={{ display: isVisible ? "block" : "none" }}
    >
      ⬆to the stars⬆
    </button>
  );
}
