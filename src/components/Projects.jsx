import { PROJECTS } from "../constants";

const Projects = () => {
  const projectsContent = PROJECTS.map((item) => (
    <div className="flex flex-wrap mb-8 lg:justify-center" key={item.id}>
      <div className="w-full lg:w-1/4">
        <img
          className="mb-6 rounded"
          src={item.image}
          width={150}
          height={150}
          alt={item.title}
        />
      </div>
      <div className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold">{item.title}</h6>
        <p className="mb-4 text-neutral-400">{item.description}</p>
        {item.technologies.map((techItem, index) => (
          <span
            className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
            key={index}
          >
            {techItem}
          </span>
        ))}
      </div>
    </div>
  ));
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center">Projects</h2>
      <div>{projectsContent}</div>
    </div>
  );
};

export default Projects;
