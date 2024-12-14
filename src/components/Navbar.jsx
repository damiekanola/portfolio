const Navbar = () => {
  return (
    <nav className=" text-white text-xs font-bold justify-center gap-5 pt-5 pb-8">
      <ul className=" flex items-center justify-center gap-5 ">
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
