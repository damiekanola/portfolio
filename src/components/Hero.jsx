import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const slidingDiv = document.getElementById("title");
    const slidingD = document.getElementById("deskTitle");
    const name = document.getElementById("deskName");
    const mobileName = document.getElementById("mobileName");
    slidingD.classList.add("visible");
    mobileName.classList.add("visible");
    name.classList.add("visible");
    slidingDiv.classList.add("visible");
  }, []);

  return (
    <section className=" text-white w-full bg-gddefault flex-col overflow-hidden">
      <div className=" min-[802px]:hidden px-3" id="mobileView">
        {/* <div className=" max-w-[130px] overflow-hidden rounded-full m-auto mb-12 border-white border">
          <img src="/images/damz.jpg" className="object-cover" />
        </div> */}
        <h1
          className=" font-bold text-5xl text-center pb-3 transition-transform duration-[1400ms] transform translate-x-full"
          id="mobileName"
        >
          EKANOLA DAMILOLA
        </h1>
        <p
          className=" font-light break-words text-5xl text-center pb-8  transition-transform duration-[1200ms] transform -translate-x-full"
          id="title"
        >
          FRONT-END DEVELOPER
        </p>
      </div>

      <div className="max-[802px]:hidden pb-5 px-5" id="desktopview">
        <p
          className=" title font-light break-words text-5xl max-[350px]:text-4xl min-[400px]:text-[3.3rem] sm:text-7xl  lg:text-9xl mb-8  transition-transform duration-[1200ms] transform -translate-x-full"
          id="deskTitle"
        >
          FRONT-END DEVELOPER
        </p>
        <div
          className="flex justify-between items-center transition-transform duration-[1400ms] transform translate-x-full"
          id="deskName"
        >
          <h1 className=" font-bold text-8xl lg:text-9xl pb-3">
            EKANOLA DAMILOLA
          </h1>

          {/* <div className="max-w-[210px] overflow-hidden flex-shrink-0 rounded-full">
            <img src="/images/damz.jpg" className="object-cover" />
          </div> */}
        </div>
      </div>

    </section>
  );
};

export default Hero;
