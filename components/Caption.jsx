"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./caption.module.scss";

import localFont from "next/font/local";
import { Scroll } from "@react-three/drei";

const myFont = localFont({ src: "../public/fonts/PPNeueMontreal-Bold.otf" });

export default function Caption() {
  const [designWord, setDesignWord] = useState("Good");

  // offset [start animation/ end animation] ["ref, window", "ref, window"]

  // const ref = useRef(null);
  // const { scrollYProgress_2 } = useScroll({
  //   target: ref,
  //   offset: ["start 0.75", "center center"],
  // });
  // const scaleX_2 = useSpring(scrollYProgress_2);

  const ScrollAnimation = ({ children }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start 0.75", "center center"],
    });
    const scaleX = useSpring(scrollYProgress);

    return (
      <motion.div
        ref={container}
        style={{ opacity: scaleX }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
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
          <p className="text-[8rem] leading-none text-[#F2F2F2]">to make</p>
        </ScrollAnimation>
      </div>
      {/* <div ref={ref}> */}
      <div
        className={`h-[80vh] bg-black text-white ${myFont.className} flex justify-center items-center text-center`}
      >
        <ScrollAnimation>
          <p className={`text-[8rem] leading-none text-[#F2F2F2] `}>
            {designWord}
            <br />
            Design
          </p>
        </ScrollAnimation>
      </div>
      <div className={`bg-black ${styles.container}`}></div>
      {/* </div> */}
    </>
  );
}
