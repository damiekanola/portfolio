import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const slidingDiv = document.getElementById("title");
    const name = document.getElementById("deskName");
    const mobileName = document.getElementById("mobileName");
    mobileName.classList.add("visible");
    name.classList.add("visible");
    slidingDiv.classList.add("visible");
  }, []);

  return (
    <section className=" text-white w-full flex-col">
      <div className=" min-[802px]:hidden" id="mobileView">
        <div className=" max-w-[300px] overflow-hidden m-auto mb-5 h-[40vh] w-fit">
          <img src="./src/assets/damz.jpg" className=" h-full object-cover" />
        </div>
        <h1
          className=" font-bold text-5xl min-[400px]:text-[3.5rem] sm:text-7xl  lg:text-9xl pb-3 transition-transform duration-[1400ms] transform translate-x-full"
          id="mobileName"
        >
          EKANOLA DAMILOLA
        </h1>
      </div>

      <p
        className=" font-light break-words text-5xl min-[400px]:text-[3.3rem] sm:text-7xl  lg:text-9xl mb-8  transition-transform duration-[1200ms] transform -translate-x-full"
        id="title"
      >
        FRONT-END DEVELOPER
      </p>

      <div className="min-[802px]:flex max-[802px]:hidden justify-between items-center transition-transform duration-[1400ms] transform translate-x-full" id="deskName">
        <h1
          className=" font-bold  text-8xl lg:text-9xl pb-3"
          
        >
          EKANOLA DAMILOLA
        </h1>

        <div className="max-w-[220px] overflow-hidden flex-shrink-0 rounded-full ">
          <img src="./src/assets/damz.jpg" className="object-cover h-full" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
