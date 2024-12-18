import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <div className="flex h-[400px] bg-[#4b5563] overflow-hidden rounded-md w-full m-auto ">
      <div className=" p-10  h-full w-1/2">
        <img src="./src/assets/incanto desktop.webp" />
      </div>
      <div className="  bg-[#374151] p-8 w-1/2 h-full">
        <h2 className=" font-semibold text-xl mb-3">Incanto</h2>
        <p>
          A fully responsive e-commerce website featuring a shopping cart with
          product management. It includes a mock Paystack payment integration
          for a real-world feel. Users can browse products, add them to their
          cart, and go through a smooth checkout process.
        </p>
        <a href="https://react-incanto-clw8.vercel.app/">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
};

export default Work;
