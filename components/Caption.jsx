"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import localFont from "next/font/local";
const myFont = localFont({ src: "../public/fonts/PPNeueMontreal-Bold.otf" });

export default function Caption() {
  const [designWord, setDesignWord] = useState("Good");
  const container = useRef(null);

  // offset [start animation/ end animation] ["ref, window", "ref, window"]
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "center center"],
  });

  // Second scroll progress to implement designWord change
  // to do
  const { scrollYProgress2 } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // To smooth it out
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <div
        className={`h-[80vh] bg-black  text-white ${myFont.className} flex justify-center items-center`}
      >
        <p className="text-[9rem] leading-none text-[#F2F2F2]">to make</p>
      </div>
      <div
        className={`h-[100vh] bg-black  text-white ${myFont.className} flex justify-center items-center text-center`}
      >
        <motion.p
          className="text-[9rem] leading-none text-[#F2F2F2]"
          style={{ opacity: scaleX }}
          ref={container}
        >
          {designWord}
          <br />
          Design
        </motion.p>
      </div>
      <div className="h-[100vh] bg-black"></div>
    </>
  );
}
