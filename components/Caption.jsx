"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import styles from "./caption.module.scss";

import localFont from "next/font/local";
import { Scroll } from "@react-three/drei";

const myFont = localFont({ src: "../public/fonts/PPNeueMontreal-Bold.otf" });

export default function Caption() {
  const [word, setWord] = useState("");
  const [designWord, setDesignWord] = useState("");
  const [space, setSpace] = useState(false);

  const { scrollY } = useScroll();

  // useEffect(() => {
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest < 950) {
      setSpace(false);
      setWord("");
    }
    if (latest > 950) {
      setSpace(false);
      setWord("to make");
    }
    if (latest > 1800) {
      setSpace(true);
      setWord("Good Design");
    }
    if (latest > 2600) {
      setSpace(true);
      setWord("Excellent Design");
    }
  });
  // }, []);

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
      offset: ["start 0.75", "start center"],
    });
    const scaleX = useSpring(scrollYProgress);

    return (
      // <div
      //   className={`h-[80vh] bg-slate-600 text-white ${myFont.className} flex justify-center items-center text-center w-full border`}
      //
      // >
      <AnimatePresence>
        <motion.div
          ref={container}
          style={{ opacity: scaleX }}
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          exit={{ rotate: "180deg" }}
          className={`sticky top-[45vh] m-auto text-center ${myFont.className}`}
          // layout={true}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      // </div>
    );
  };

  return (
    <>
      {/* <div
        className={`h-[80vh] bg-gray-900 text-white ${myFont.className} flex justify-center items-center`}
      > */}
      {/* <div
        className={`h-[200vh] bg-slate-600 text-white ${myFont.className} 
        
        w-full border`}
        // flex justify-center items-center text-center
      > */}
      <ScrollAnimation>
        <p className="text-[8rem] leading-none text-[#F2F2F2] sticky top-2/4">
          {/* to make */}
          <AnimatePresence>
            {space
              ? word.split(" ").map((word, index) => {
                  return (
                    <span key={index}>
                      {word} <br />
                    </span>
                  );
                })
              : word.split(" ").map((word, index) => {
                  return <span key={index}>{word} </span>;
                })}
          </AnimatePresence>
        </p>
      </ScrollAnimation>
      {/* </div> */}
      {/* <div ref={ref}> */}
      {/* <div
        className={`h-[80vh] bg-slate-600 text-white ${myFont.className} flex justify-center items-center text-center`}
      > */}
      {/* <ScrollAnimation>
        <p className={`text-[8rem] leading-none text-[#F2F2F2] `}>
          {designWord}
          <br />
          Design
        </p>
      </ScrollAnimation> */}
      {/* </div> */}
      <div className={`bg-black ${styles.container}`}></div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
