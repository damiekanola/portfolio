const SkillCard = ({ imgSrc, skillName }) => (
    <div >
      <img src={imgSrc} className="w-[60px]" alt={skillName} />
      <span className=" flex justify-center mt-2">{skillName}</span>
    </div>
  );


const Skills = () => {
    const skills = [
        { imgSrc: "./src/assets/react.svg", skillName: "React" },
        { imgSrc: "./src/assets/javascript.svg", skillName: "JavaScript" },
        { imgSrc: "./src/assets/html.svg", skillName: "HTML" },
        { imgSrc: "./src/assets/css.svg", skillName: "CSS" },
        { imgSrc: "./src/assets/git.svg", skillName: "Git" }
      ];
  return (
    <section className=" bg-gddefault text-white p-10">
      <h2 className=" text-center font-bold text-lg mb-5">Skills</h2>
      <div >
      <div className=" flex justify-between flex-wrap gap-4">
      {skills.map((skill, index) => (
          <SkillCard key={index} imgSrc={skill.imgSrc} skillName={skill.skillName} />
        ))}
      </div>
      </div>
     
    </section>
  );
};

export default Skills;
