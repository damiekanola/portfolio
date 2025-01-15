import Work from "./Work";
import data from "../../data.json";
const Projects = () => {
  return (
    <section id="portfolio" className=" bg-gd50 text-white px-8 py-8">
      <h2 className=" text-center font-bold text-lg mb-5">Projects</h2>
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
