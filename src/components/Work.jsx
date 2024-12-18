import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Work = () => {
  return (
    <div className="flex rounded-md w-full h-[400px] m-auto min-[]:">
      <div className="bg-[#4b5563] p-10  h-full w-1/2 rounded-tl-md rounded-bl-md">
        <img src="./src/assets/incanto desktop.webp"/>
      </div>
      <div className="  bg-[#374151] p-8 w-1/2 rounded-tr-md rounded-br-md">
        <h2 className=" font-semibold text-xl mb-3">Incanto</h2>
        <p>
          A fully responsive e-commerce website featuring a shopping cart with
          product management. It includes a mock Paystack payment integration
          for a real-world feel. Users can browse products, add them to their
          cart, and go through a smooth checkout process.
        </p>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </div>
    </div>
  );
};

export default Work;
