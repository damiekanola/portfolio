import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("visible");
  }, []);

  return (
    <nav className=" text-white text-[10px] bg-gddefault z-50 shadow-sm font-bold flex md:justify-center justify-end gap-5 py-6 sticky">
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-gray-800"
      >
        <HiOutlineMenuAlt3 size={28} className=" text-sky-300" />
      </button>
      <ul
        className=" hidden md:flex items-center text-sm justify-center gap-5 w-fit top-0 left-0 transition-transform duration-1000 transform -translate-y-full "
        id="navbar"
      >
        <li className="hover:text-sky-300">
          <a href="#about">About me</a>
        </li>
        <li className="hover:text-sky-300">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-sky-300">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-sky-300">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      {/* <div className=" flex ite">
        <a href="/my_resume.pdf" download="My_Resume.pdf">
          <button className="download-btn">Download My Resume</button>
        </a>
      </div> */}

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gddefault text-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end items-center ">
          <button onClick={() => setIsOpen(false)}>
            <HiMiniXMark size={30} />
          </button>
        </div>

        <ul className="p-4 space-y-4 text-base">
          <li className="hover:text-sky-300 text-base">
            <a href="#about">About me</a>
          </li>
          <li className="hover:text-sky-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-sky-300">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-sky-300">
            <a href="#contact">Contact Me</a>
          </li>
          {/* <div className=" flex ite">
        <a href="/my_resume.pdf" download="My_Resume.pdf">
          <button className="download-btn">Download My Resume</button>
        </a>
      </div> */}

          {/* <li className="hover:text-sky-300">
            <a href="/my_resume.pdf" download="My_Resume.pdf">
              <button >Download My Resume</button>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
