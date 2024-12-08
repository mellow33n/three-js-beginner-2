import { Canvas } from "@react-three/fiber";
import RotatingObject from "./rotatingObject";
import {
  TorusGeometry,
  BoxGeometry,
  SphereGeometry,
  CylinderGeometry,
  ConeGeometry,
} from "three";

const geometries = [
  new TorusGeometry(0.5, 0.2, 16, 32),
  new BoxGeometry(1, 1, 1, 8, 8, 8),
  new SphereGeometry(1, 16, 32),
  new CylinderGeometry(1, 1, 1.4, 32, 32),
  new ConeGeometry(1, 1.5, 32),
];

export default function Scene ({ index, visibility }) {

  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ width: "100%", height: "100vh" }}
    >
      <RotatingObject
        geometry={geometries[index]}
        visibility={visibility}
      />
    </Canvas>
  );
};


