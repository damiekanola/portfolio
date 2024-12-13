function About() {
  return (
    <section className=" bg-dark text-white px-15 py-8">
      <div className=" w-[70%] m-auto pb-7">
        <h2 className=" flex justify-center font-bold text-lg pb-3">About Me</h2>
        <p className=" font-normal text-xs">
          Im Sara Jones, a UI/UX designer dedicated to crafting intuitive and
          visually stunning digital experiences. With a passion for user-centric
          design, I transform ideas into functional and beautiful interfaces.
          Lets collaborate and shape the future of design together.
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
