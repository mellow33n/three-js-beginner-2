import React from "react";
import Scene from "./card/scene";
import { useVisibility } from "./useVisability"; 

export default function Main({ elementsLenght }) {
  const elementsLenghtArray = Array.from(
    new Array(elementsLenght),
    (_, index) => index
  );

  const visibilities = useVisibility(elementsLenght);

  return (
    <main className="main">
      {elementsLenghtArray.map((index) => (
        <section className="card" key={index} id={"canvas-index-" + index}>
          <h2 className="card-title">{"Card " + (index + 1)}</h2>
          <p className="card-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="webgl">
            <Scene index={index} visibility={visibilities[index] || 0} />
          </div>
        </section>
      ))}
    </main>
  );
}
