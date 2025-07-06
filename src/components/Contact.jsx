import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <footer className=" p-14 bg-gddefault text-white " id="contact">
      <div className=" w-full">
        <div className=" pb-4">
          <p className=" font-bold text-lg pb-2">Get in Touch</p>
          <p className=" font-normal text-sm">
            Have a question or a project in mind? Id love to hear from you. Lets
            chat and make something amazing together.
          </p>
        </div>

        <ul className=" pt-7 flex flex-col gap-4">
          <li className=" flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faPhone} />
            <p className="">+2348109994187</p>
          </li>

          
          <a href="mailto:damiekanola@gmail.com">
            <li className=" flex items-center gap-2 text-sm ">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="">damiekanola@gmail.com</p>
            </li>
          </a>

          <li className=" flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Lekki, Lagos, Nigeria</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
