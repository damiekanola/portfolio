"use client"

import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { HiMiniXMark } from "react-icons/hi2"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById("navbar")
    navbar?.classList.add("visible")
  }, [])

  return (
    <nav className="text-white text-[10px] bg-gddefault z-50 shadow-sm font-bold sticky border-b">
      <div className="flex items-center justify-between py-6 px-4 md:px-6">
        {/* Mobile Menu Button - Left side */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-sky-300">
          <HiOutlineMenuAlt3 size={28} />
        </button>

        {/* Desktop Navigation - Center */}
        <ul
          className="hidden md:flex items-center text-sm justify-center gap-5 transition-transform duration-1000"
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

        {/* Download Button - Far Right */}
        <div className="hidden md:block">
          <a href="/my_resume.pdf" download="My_Resume.pdf">
            <button className="download-btn bg-sky-300 hover:bg-sky-400 text-gray-900 px-4 py-2 rounded transition-colors duration-200">
              Download My Resume
            </button>
          </a>
        </div>

        {/* Mobile: Empty div to maintain layout */}
        <div className="md:hidden w-7"></div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gddefault text-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end items-center">
          <button onClick={() => setIsOpen(false)}>
            <HiMiniXMark size={30} />
          </button>
        </div>
        <ul className="p-4 space-y-4 text-base">
          <li className="hover:text-sky-300">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About me
            </a>
          </li>
          <li className="hover:text-sky-300">
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li className="hover:text-sky-300">
            <a href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>
          <li className="hover:text-sky-300">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact Me
            </a>
          </li>
          <li className="pt-4 border-t border-gray-600">
            <a href="/my_resume.pdf" download="My_Resume.pdf">
              <button className="w-full bg-sky-300 hover:bg-sky-400 text-gray-900 px-4 py-2 rounded transition-colors duration-200">
                Download My Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

