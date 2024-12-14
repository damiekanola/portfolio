const Header = () => {
  return (
    <section className=" text-white flex justify-between">
      <div className=" w-1/2">
        <p className=" font-normal text-[10px] pb-3">FRONT-END DEVELOPER</p>
        <h1 className=" font-bold text-2xl pb-3">
          Hi There, Im <br />
          <span>Ekanola Damilola</span>
        </h1>
        <p className=" font-normal text-[10px]">
          Welcome to my portfolio of captivating digital experiences. Explore my
          work and lets create something extraordinary together.
        </p>
      </div>
      <div className=" w-[200px] h-[200px] overflow-hidden">
        <img src="./src/assets/damz.jpg" className="object-cover" />
      </div>
    </section>
  );
};

export default Header;
