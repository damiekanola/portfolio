function About() {
  return (
    <section className=" bg-gd50 text-white px-15 py-8" id="about">
      <div className=" w-[70%] m-auto pb-7">
        <h2 className=" flex justify-center font-bold text-lg pb-3">
          About Me
        </h2>
        <p className=" font-normal text-base">
          Im Damilola, a frontend developer with a degree in computer
          engineering and over two years of experience turning ideas into
          interactive, user-friendly web experiences. Im passionate about
          bringing designs to life—crafting seamless interfaces that blend
          functionality with creativity.
        </p>
        <p>
          With a strong foundation in HTML, CSS, JavaScript, React, and Tailwind
          CSS, I specialize in building responsive and engaging websites that
          leave lasting impressions. For me, its not just about coding but
          creating meaningful digital experiences.
        </p>
        <p>
          When Im not writing code, I enjoy exploring creative outlets that fuel
          my imagination and inspire my work.
        </p>
      </div>

      <div className=" flex justify-center items-center gap-7">
        <div className=" flex-col">
          <p className=" font-bold text-3xl">502</p>
          <p>Projects</p>
        </div>
        <div>
          <p className=" font-bold text-3xl flex justify-center">2</p>
          <p>Years of Experience</p>
        </div>
        <div>
          <p className=" font-bold text-3xl flex justify-center">502</p>
          <p>Clients served</p>
        </div>
      </div>
    </section>
  );
}

export default About;
