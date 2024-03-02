import "./styles.css";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Experience = () => {
  const boxRef = useRef(null);

  useFrame((state,delta) => {
    boxRef.current.rotation.x += 1 * delta;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <OrbitControls makeDefault />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
};

export default Experience;

/** 
export default Experience;

import "./styles.css";

const Experience = ({title,description}) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <span>{description}</span>
    </div>
  );
};

export default Experience;*/
