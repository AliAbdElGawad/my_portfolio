import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import portfolioPic from "../assets/kevinRushProfile.png";

const Hero = () => {
  // variants function for framer motion
  const variants = (delay, direction) => ({
    initial: {
      opacity: 0,
      x: direction,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut", duration: 0.8, delay: delay },
    },
  });

  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={variants(0, -100)}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-[5.5rem]"
            >
              Ali AbdElGawad
            </motion.h1>
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              initial="initial"
              animate="animate"
              variants={variants(0.2, -100)}
              className="text-3xl tracking-tight text-transparent cursor-pointer select-none bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              initial="initial"
              animate="animate"
              variants={variants(0.5, -100)}
              className="max-w-xl py-6 my-2 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial="initial"
              animate="animate"
              variants={variants(0.8, 100)}
              src={portfolioPic}
              alt="Ali"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
