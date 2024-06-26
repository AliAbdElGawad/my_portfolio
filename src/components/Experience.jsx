import { EXPERIENCES } from "../constants";
const Experience = () => {
  // const technologies = Experience
  const experiencesContent = EXPERIENCES.map((item) => (
    <div className="flex flex-wrap mb-8 lg:justify-center" key={item.id}>
      <div className="w-full lg:w-1/4">
        <p className="mb-2 text-sm text-neutral-400">{item.keyLearnings}</p>
      </div>
      <div className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 text-sm font-semibold">{item.role}</h6>
        <p className="mb-4 text-sm text-neutral-400">{item.description}</p>
        {item.technologies.map((item, index) => (
          <span
            className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  ));
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center">Experience</h2>
      <div>{experiencesContent}</div>
    </div>
  );
};

export default Experience;
