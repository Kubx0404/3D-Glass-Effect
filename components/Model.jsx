import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/infinity_11.glb");
  // const { nodes } = useGLTF("/medias/klein_bottle_2.glb");

  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   // 1.00

  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },

  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },

  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   // 0.04

  //   backside: { value: true },
  // });

  const materialProps = {
    thickness: 1.0,
    roughness: 0.0,
    transmission: 1.0,
    ior: 1.2,
    chromaticAberration: 0.03,
    backside: true,
  };

  return (
    <group scale={viewport.width / 5}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Possibilties
        {/* {"\n"}
        {"\n"} */}
      </Text>
      <mesh ref={torus} {...nodes.infinity}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
