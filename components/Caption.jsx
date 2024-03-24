"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import localFont from "next/font/local";
import { Scroll } from "@react-three/drei";

const myFont = localFont({ src: "../public/fonts/PPNeueMontreal-Bold.otf" });

export default function Caption() {
  const [designWord, setDesignWord] = useState("Good");

  // offset [start animation/ end animation] ["ref, window", "ref, window"]

  const ScrollAnimation = ({ children }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start 0.75", "center center"],
    });
    return (
      <motion.div ref={container} style={{ opacity: scrollYProgress }}>
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <div
        className={`h-[80vh] bg-black text-white ${myFont.className} flex justify-center items-center`}
      >
        <ScrollAnimation>
          <p className="text-[9rem] leading-none text-[#F2F2F2]">to make</p>
        </ScrollAnimation>
      </div>
      <div
        className={`h-[80vh] bg-black text-white ${myFont.className} flex justify-center items-center text-center`}
      >
        <ScrollAnimation>
          <p className="text-[9rem] leading-none text-[#F2F2F2]">
            {designWord}
            <br />
            Design
          </p>
        </ScrollAnimation>
      </div>
      <div className="h-[100vh] bg-black"></div>
    </>
  );
}
