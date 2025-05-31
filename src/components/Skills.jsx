

const SkillCard = ({ imgSrc, skillName }) => (
  <div className=" flex-shrink-0">
    <img src={imgSrc} className="max-w-[40px]" alt={skillName} />
    <span className=" flex justify-center mt-2 text-sm">{skillName}</span>
  </div>
);

const Skills = () => {
  const skills = [
    { imgSrc: "/images/react.svg", skillName: "React" },
    { imgSrc: "/images/javascript.svg", skillName: "JavaScript" },
    // { imgSrc: "/images/tailwind.svg", skillName: "Tailwind CSS" },
    { imgSrc: "/images/html.svg", skillName: "HTML" },
    { imgSrc: "/images/css.svg", skillName: "CSS" },
    { imgSrc: "/images/git.svg", skillName: "Git" },
    { imgSrc: "/images/typescript.svg", skillName: "TypeScript" },
  ];
  return (
    <section className=" bg-gddefault text-white py-8  px-10" id="skills">
      <h2 className=" text-center font-bold text-lg mb-5">Skills</h2>
      <div>
        <div className=" flex justify-between flex-wrap gap-4">
          {/* <div className="w-[75%] m-auto overflow-hidden">
        <motion.div
          className="flex justify-between text-white text-3xl"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            },
          }}
        > */}
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              imgSrc={skill.imgSrc}
              skillName={skill.skillName}
            />
          ))}

          {/* </motion.div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
