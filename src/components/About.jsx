function About() {
  return (
    <section className="  text-white md:px-14 " id="about">
      <div className="m-auto pb-7">
        <div className=" flex items-center mb-6">
          <h2 className=" text-left font-bold text-lg">
            {" "}
            <span className=" text-sky-300">01.</span> About me
          </h2>
          <div className=" ml-4 bg-gray-400 h-px flex-1 opacity-40"></div>
        </div>
        <p className=" font-normal text-lg text-left">
          I'm a Front End Developer with 1+ years of experience. I specialize in
          crafting seamless user interfaces using HTML, CSS, JavaScript,
          React.js, Tailwind CSS, React Router and Next js, with a strong
          command of Git for version control. I’m passionate about coding and
          bringing designs to life, transforming creative ideas into functional,
          visually appealing web experiences. I take pride in building solutions
          that are not only aesthetically pleasing but also efficient and
          user-friendly. When I’m not coding, you’ll probably find me exploring
          new tech trends or refining my skills to deliver even better results.
          Let’s create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
