const SkillCard = ({ imgSrc, skillName }) => (
  <div>
    <img src={imgSrc} className="w-[60px]" alt={skillName} />
    <span className=" flex justify-center mt-2">{skillName}</span>
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
  ];
  return (
    <section className=" bg-gddefault text-white py-10 px-14">
      <h2 className=" text-center font-bold text-lg mb-5">Skills</h2>
      <div>
        <div className=" flex justify-between flex-wrap gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              imgSrc={skill.imgSrc}
              skillName={skill.skillName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
