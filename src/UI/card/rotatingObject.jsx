import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingObject ({ geometry, visibility })  {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02; 
      meshRef.current.position.x = -10 + visibility * 10; 
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
};


