import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tech from "./Tech";

const Work = () => {
  return (
    <article className="flex max-[800px]:flex-col h-full overflow-hidden rounded-md ">
      <div className=" p-10 w-full bg-[#4b5563] flex-1 max-[800px]:flex-none max-[800px]:h-1/3">
        <img src="/images/incanto desktop.webp" className=" object-contain" />
      </div>
      <div className="  bg-[#374151]  w-full py-8 px-4 flex-1">
        <h2 className=" font-semibold text-xl mb-3">Incanto</h2>
        <p className=" text-xs">
          A fully responsive e-commerce website featuring a shopping cart with
          product management. It includes a mock Paystack payment integration
          for a real-world feel. Users can browse products, add them to their
          cart, and go through a smooth checkout process.
        </p>
        <div className=" flex flex-wrap">
          <Tech />
        </div>

        <a href="https://react-incanto-clw8.vercel.app/" target="blank">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </article>
  );
};

export default Work;
