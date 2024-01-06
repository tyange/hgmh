import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import dwingGunenunImg from "../assets/books/dwing-guneun.jpg";
import itorokImg from "../assets/books/itorok.jpg";
import omletImg from "../assets/books/omlet.jpg";
import sangmulsungImg from "../assets/books/sangmulsung.jpg";
import sonyunOndaImg from "../assets/books/sonyun-onda.jpg";

export default function Intro() {
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
      <div className="absolute bottom-0 right-0 w-full h-1/3">
        <div className="w-full h-full relativ">
          <div className="absolute w-24 bottom-5 right-[458px]">
            <img className="w-full" src={dwingGunenunImg} />
          </div>
          <div className="absolute bottom-5 w-36 right-[315px]">
            <img className="w-full" src={sangmulsungImg} />
          </div>
          <div className="absolute w-52 bottom-5 right-32">
            <img className="w-full" src={sonyunOndaImg} />
          </div>
          <div className="absolute bottom-5 w-36 right-5">
            <img className="w-full" src={omletImg} />
          </div>
          <div className="absolute right-0 w-20 bottom-5">
            <img className="w-full" src={itorokImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
