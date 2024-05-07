import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { SiJquery, SiReactrouter, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="skills-icons">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="skills-icons">
          <SiNextdotjs className="text-white text-7xl" />
        </div>
        <div className="skills-icons">
          <RiTailwindCssLine className="text-7xl text-sky-500" />
        </div>
        <div className="skills-icons">
          <FaSass className="text-pink-500 text-7xl" />
        </div>
        <div className="skills-icons">
          <SiJquery className="text-blue-800 text-7xl" />
        </div>
        <div className="skills-icons">
          <SiReactrouter className="text-red-700 text-7xl" />
        </div>
        <div className="skills-icons text-violet-700">
          <TbBrandRedux className="text-7xl " />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
