import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import dwingGunenunImg from "../assets/books/dwing-guneun.jpg";
import itorokImg from "../assets/books/itorok.jpg";
import omletImg from "../assets/books/omlet.jpg";
import sangmulsungImg from "../assets/books/sangmulsung.jpg";
import sonyunOndaImg from "../assets/books/sonyun-onda.jpg";
import { useState } from "react";

export default function Intro() {
  const [bookOverlayOpacity, setBookOverlayOpacity] = useState(0);
  const [bookZIndex, setBookZIndex] = useState("auto");

  const textVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };

  const bookMouseOverHandler = () => {
    setBookOverlayOpacity(90);
    setBookZIndex("10");
  };

  const bookMouseOutHandler = () => {
    setBookOverlayOpacity(0);
    setBookZIndex("auto");
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute flex flex-col gap-10 top-1/4 -translate-y-1/2 left-5 w-[764px]">
        <TypeAnimation
          sequence={[
            "한국문학의",
            500,
            "한국문학의 최전선",
            500,
            "한국문학의 최전선에서",
          ]}
          wrapper="span"
          cursor={true}
          className="inline-block font-serif break-words text-7xl"
        />
        <motion.div
          className="mr-10"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.p className="text-right" variants={textVariant}>
            한국문학은 세대를 거치며 변화를 거듭해왔습니다.
          </motion.p>
          <motion.p className="text-right" variants={textVariant}>
            시대를 투영해 씌여진 새로운 한국문학 작품은
          </motion.p>
          <motion.p className="text-right" variants={textVariant}>
            다시 한번 독자들을 놀라게 합니다.
          </motion.p>
          <motion.p className="text-right" variants={textVariant}>
            또한 번역된 한국문학은 세계의 유수한 문학상을 거머쥐며
          </motion.p>
          <motion.p className="text-right" variants={textVariant}>
            동아시아 문학의 새로운 길을 제시하고 있습니다.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 z-10 w-full h-1/3">
        <div className="relative w-full h-full">
          <div
            className={`absolute w-24 bottom-0 right-[458px]  box-content  hover:w-52 transition-all hover:z-30 z-${bookZIndex}`}
            onMouseOver={bookMouseOverHandler}
            onMouseOut={bookMouseOutHandler}
          >
            <img className="w-full" src={dwingGunenunImg} />
          </div>
          <div
            className={`absolute bottom-0 w-36 right-[315px]  box-content  hover:w-52 transition-all hover:z-30 z-${bookZIndex}`}
            onMouseOver={bookMouseOverHandler}
            onMouseOut={bookMouseOutHandler}
          >
            <img className="w-full" src={sangmulsungImg} />
          </div>
          <div
            className={`box-content absolute bottom-0 transition-all w-52 right-32 hover:w-60 hover:z-30 z-${bookZIndex}`}
            onMouseOver={bookMouseOverHandler}
            onMouseOut={bookMouseOutHandler}
          >
            <img className="w-full" src={sonyunOndaImg} />
          </div>
          <div
            className={`box-content absolute bottom-0 transition-all w-36 right-5 hover:w-52 hover:z-30 z-${bookZIndex}`}
            onMouseOver={bookMouseOverHandler}
            onMouseOut={bookMouseOutHandler}
          >
            <img className="w-full" src={omletImg} />
          </div>
          <div
            className={`box-content absolute bottom-0 right-0 w-20 transition-all hover:w-52 hover:z-30 z-${bookZIndex}`}
            onMouseOver={bookMouseOverHandler}
            onMouseOut={bookMouseOutHandler}
          >
            <img className="w-full" src={itorokImg} />
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full opacity-${bookOverlayOpacity} bg-black transition-all duration-200 z-20`}
      ></div>
    </div>
  );
}
