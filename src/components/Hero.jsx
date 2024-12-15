import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const slidingDiv = document.getElementById('title');
        const name = document.getElementById('name');
        name.classList.add('visible');
        slidingDiv.classList.add('visible');
    }, []);

  return (
    <section className=" text-white">
     
      <p className=" font-light text-9xl mb-5 transition-transform duration-[1200ms] transform -translate-x-full" id='title'>FRONTEND DEVELOPER</p>
      <div className="flex justify-between items-center transition-transform duration-[1400ms] transform translate-x-full" id='name'>
        <h1 className=" font-bold text-9xl pb-3 w-[2/3]">EKANOLA DAMILOLA</h1>

        <div className=" w-[220px] h-full overflow-hidden flex-shrink-0 rounded-full">
          <img src="./src/assets/damz.jpg" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
