"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { animete, motion } from "framer-motion";

export default function Index() {
  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Canvas style={{ background: "#000000" }}>
        <Model />

        <directionalLight intensity={2} position={[0, 2, 3]} />

        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
}
