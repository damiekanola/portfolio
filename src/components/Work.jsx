import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tech from "./Tech";


const Work = ({ name, image, path, description, stack}) => {
  return (
    <article className="flex max-[800px]:flex-col h-full overflow-hidden rounded-md ">
      <div className=" p-10 w-full bg-[#4b5563] flex-1 max-[800px]:flex-none max-[800px]:h-1/3">
        <img src={image} className=" object-contain" />
      </div>
      <div className="  bg-[#374151]  w-full py-8 px-4 flex-1">
        <h2 className=" font-semibold text-xl mb-3">{name}</h2>
        <p className=" text-xs">
         {description}
        </p>
        <div className=" flex flex-wrap gap-4 my-2">
          {stack.map(tech => (
            <Tech tech={tech} key={tech} />
          ))}
        </div>

        <a href={path} target="blank">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </article>
  );
};

export default Work;
