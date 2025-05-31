import Work from "./Work";
import data from "../../data.json";
const Projects = () => {
  return (
    <section id="portfolio" className="  text-white md:px-8 py-8">
      <div className=" flex items-center mb-6">

      <h2 className=" text-left font-bold text-xl ">
        <span className=" text-sky-300">03.</span> Projects I've built
      </h2>
      <div className=" h-px flex-1 bg-gray-400 opacity-30 ml-4">

      </div>
      </div>
      {data.map((project) => (
        <Work
          key={project.id}
          name={project.name}
          image={project.image}
          path={project.url}
          description={project.description}
          stack={project.techStack}
        />
      ))}
    </section>
  );
};

export default Projects;
