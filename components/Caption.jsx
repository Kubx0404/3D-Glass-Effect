"use client";

import { useState, useRef } from "react";
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

const ScrollAnimation = ({ children }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.75", "start 0.6"],
  });
  const scaleX = useSpring(scrollYProgress);

  return (
    <AnimatePresence>
      <motion.div
        ref={container}
        style={{ opacity: scaleX }}
        className={`sticky top-[40vh] m-auto text-center ${myFont.className} h-auto`}
        // transition={{ duration:  }}
        // exit={{ opacity: 0 }}
        key={children}
        layout
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function Caption() {
  const [word, setWord] = useState("");
  const [designWord, setDesignWord] = useState("");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);

    if (latest < 1000) {
      // setWord("");
      setWord("");
      setDesignWord("");
    }
    if (latest > 1000) {
      setDesignWord("");
      setWord("to make");
    }
    if (latest > 2000) {
      setDesignWord("Good");
      setWord("Design");
    }
    if (latest > 3000) {
      setDesignWord("Modern");
      setWord("Design");
    }
    if (latest > 4000) {
      setDesignWord("Clean");
      setWord("Design");
    }
    if (latest > 5000) {
      setDesignWord("");
      setWord("");
    }

    // switch (latest) {
    //   case latest < 1000:
    //     setWord("");
    //     setDesignWord("");
    //     break;
    //   case latest > 5000:
    //     setDesignWord("");
    //     setWord("");
    //     break;
    //   case latest > 4000:
    //     setDesignWord("Clean");
    //     setWord("Design");
    //     break;
    //   case latest > 3000:
    //     setDesignWord("Modern");
    //     setWord("Design");
    //     break;
    //   case latest > 2000:
    //     setDesignWord("Good");
    //     setWord("Design");
    //     break;
    //   case latest > 1000:
    //     setDesignWord("");
    //     setWord("to make");
    //     break;

    // default:
    //   break;
    // }
  });

  // offset [start animation/ end animation] ["ref, window", "ref, window"]

  return (
    <>
      <div className={`bg-black h-[450vh]`}>
        <div className="text-[11rem] leading-none text-[#F2F2F2] sticky top-[40vh]">
          {/* <AnimatePresence> */}
          <ScrollAnimation>
            {designWord && (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ scale: 1.1, opacity: 1 }}
                // whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
                // exit={{ rotate: "180deg", opacity: 0 }}
                key={designWord}
                // layout
              >
                {designWord} <br />
              </motion.span>
            )}
          </ScrollAnimation>
          {/* </AnimatePresence> */}

          {/* <AnimatePresence> */}
          <ScrollAnimation>
            {word && (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ opacity: 0, rotate: "180deg" }}
                // exit={{ rotate: "180deg", opacity: 0 }}
                key={word}
                // layout
              >
                {word}
              </motion.span>
            )}
          </ScrollAnimation>
          {/* </AnimatePresence> */}
        </div>
      </div>
    </>
  );
}
