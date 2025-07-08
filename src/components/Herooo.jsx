// const Herooo = () => {
//   return (
//     <div className="bg-gddefault text-white px-14 h-[80vh] flex items-center justify-center">
//       <div className="">
//         <p className=" text-lg font-medium text-sky-300">Hi, my name is</p>
//         <h1 className=" text-[7rem] font-medium hover:text-sky-300">Ekanola Damilola.</h1>
//         <p className=" text-[4rem] font-medium text-gray-500 ">
//           I create smooth web experiences.
//         </p>
//         {/* <p className=" text-base w-2/3">
//         I'm a frontend developer who enjoys turning designs into clean,
//         responsive websites. I focus on building user-friendly interfaces that
//         look good and perform well. I'm always learning and improving, and I
//         love working on real projects that make a difference.
//       </p> */}
//       </div>
//     </div>
//   );
// };

// export default Herooo;

import { useEffect, useState } from "react";

const Herooo = () => {
  const [showLines, setShowLines] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLines(() => [true, false, false]), 400),
      setTimeout(() => setShowLines(() => [true, true, false]), 1200),
      setTimeout(() => setShowLines(() => [true, true, true]), 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-gddefault text-white md:px-14 px-2  py-16">
      <div className=" flex flex-col">
        <p
          className={`text-lg font-medium text-sky-300 transform transition-all duration-700 ease-in ${
            showLines[0]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Hi, my name is
        </p>
        <h1
          className={` text-[9vw] font-medium hover:text-sky-300 transform transition-all duration-700 delay-100 ${
            showLines[1]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Ekanola Damilola.
        </h1>
       
        <p
          className={`text-[6vw] font-medium text-gray-500 transform transition-all duration-700 delay-200 ${
            showLines[2]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          I create smooth web experiences.
        </p>
        {/* <p className=" text-sm my-2 text-gray-300">
          I'm a frontend developer who enjoys turning designs into clean,
          responsive websites. I focus on building user-friendly interfaces that
          look good and perform well. I'm always learning and improving, and I
          love working on real projects that make a difference.
        </p> */}
      </div>
    </div>
  );
};

export default Herooo;
