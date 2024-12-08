import React, { useEffect, useRef, useState } from "react";
import Scene from "./Scene"; 
import { getVisibilityPercentage } from "../utility";


export default function Card({ index }) {
  const cardRef = useRef(); 
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    // upd visiblity state
    const handleScroll = () => {
      if (cardRef.current) {
        const visibilityValue = getVisibilityPercentage(cardRef.current);
        setVisibility(visibilityValue); 
      }
    };
    // first call render
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="card" ref={cardRef}>
      <h2 className="card-title">{"Card " + (index + 1)}</h2>
      <p className="card-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
        eum iusto! Accusamus possimus ullam velit quaerat, voluptate quae.
      </p>
      <div className="canvas-container">
        <Scene index={index} visibility={visibility} />
      </div>
    </section>
  );
}
