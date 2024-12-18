import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <div className="flex max-[800px]:flex-col max-[800px]:justify-center h-full overflow-hidden rounded-md ">
      <div className=" p-10 w-1/2 max-[800px]:w-3/4 bg-[#4b5563] flex-1">
        <img src="/images/incanto desktop.webp" />
      </div>
      <div className="  bg-[#374151] p-8 w-1/2 max-[800px]:w-3/4 flex-1">
        <h2 className=" font-semibold text-xl mb-3">Incanto</h2>
        <p>
          A fully responsive e-commerce website featuring a shopping cart with
          product management. It includes a mock Paystack payment integration
          for a real-world feel. Users can browse products, add them to their
          cart, and go through a smooth checkout process.
        </p>
        <a href="https://react-incanto-clw8.vercel.app/" target="blank">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
};

export default Work;
