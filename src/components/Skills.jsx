import Marquee from "react-fast-marquee";

const SkillCard = ({ imgSrc, skillName }) => (
  <div className=" mx-8 inline-block">
    <img src={imgSrc} className="max-w-[40px]" alt={skillName} />
  
    <span className=" flex justify-center mt-2 text-sm">{skillName}</span>
  </div>
);

const Skills = () => {
  const skills = [
    { imgSrc: "/images/react.svg", skillName: "React" },
    { imgSrc: "/images/javascript.svg", skillName: "JavaScript" },
    { imgSrc: "/images/tailwind.svg", skillName: "Tailwind CSS" },
    { imgSrc: "/images/html.svg", skillName: "HTML" },
    { imgSrc: "/images/css.svg", skillName: "CSS" },
    { imgSrc: "/images/git.svg", skillName: "Git" },
    { imgSrc: "/images/typescript.svg", skillName: "TypeScript" },
    
    // { imgSrc: "/images/react.svg", skillName: "React" },
    // { imgSrc: "/images/javascript.svg", skillName: "JavaScript" },
    // { imgSrc: "/images/tailwind.svg", skillName: "Tailwind CSS" },
    // { imgSrc: "/images/html.svg", skillName: "HTML" },
    // { imgSrc: "/images/css.svg", skillName: "CSS" },
    // { imgSrc: "/images/git.svg", skillName: "Git" },
    // { imgSrc: "/images/typescript.svg", skillName: "TypeScript" },
  
  ];
  return (
    <section className=" bg-gddefault text-white py-12  md:px-10" id="skills">
        <div className=" mb-6 flex items-center">
          <h2 className=" text-left font-bold text-lg ">
            {" "}
            <span className=" text-sky-300">02.</span> Technologies I use
          </h2>
          <div className=" h-px flex-1 bg-gray-400 opacity-30 ml-4"></div>
        </div>
   
      <Marquee>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            imgSrc={skill.imgSrc}
            skillName={skill.skillName}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
