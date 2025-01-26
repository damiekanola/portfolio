import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const navbar = document.getElementById('navbar');
        navbar.classList.add('visible');
    }, []);


  return (
    <nav className=" text-white text-[10px] bg-gddefault z-50 shadow-sm font-bold flex justify-center gap-5 py-6 " >
      <ul className=" flex items-center justify-center gap-5 w-fit top-0 left-0 transition-transform duration-1000 transform -translate-y-full " id='navbar'>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
