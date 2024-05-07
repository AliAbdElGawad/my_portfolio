import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { FaSass, FaBootstrap } from "react-icons/fa";
import { SiJquery, SiReactrouter, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { motion } from "framer-motion";

const variantsIcons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
      duration: duration,
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(2)}
          className="skills-icons"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(2.5)}
          className="skills-icons"
        >
          <SiNextdotjs className="text-white text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(3)}
          className="skills-icons"
        >
          <RiTailwindCssLine className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(3.5)}
          className="skills-icons"
        >
          <FaSass className="text-pink-500 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(4)}
          className="skills-icons text-violet-600"
        >
          <FaBootstrap className="text-7xl " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(4.5)}
          className="skills-icons"
        >
          <SiJquery className="text-blue-800 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(5)}
          className="skills-icons"
        >
          <SiReactrouter className="text-red-700 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variantsIcons(5.5)}
          className="skills-icons text-violet-800"
        >
          <TbBrandRedux className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
