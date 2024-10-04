

import error404 from "../assets/Images/404Page.jpg";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] text-center">
      <img
        src={error404}
        alt="Error 404"
        className="w-[90%] max-w-[51.2rem] h-auto mb-[2.4rem] transition-transform transform hover:scale-105"
      />
      <h1 className="mb-[1.6rem] text-[3rem] leading-[3.6rem] font-bold text-black md:text-[3.6rem] md:leading-[4rem] lg:text-[4.8rem] lg:leading-[1rem] drop-shadow-md">
        Oops! Page not found
      </h1>
      <p className="max-w-[51.2rem] px-[1.6rem] my-[3.2rem] text-[1.8rem] leading-[2.8rem] text-black md:text-xl lg:text-[2.4rem] lg:leading-[3rem]">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <button className="flex items-center justify-center px-[3.2rem] py-[1.2rem] text-white transition-all duration-200 ease-in-out transform bg-purple-700 rounded-lg shadow-md hover:text-black hover:bg-gray-100 hover:scale-105">
        <Link to={"/"} className="flex items-center justify-center space-x-3 text-[1.8rem]">
          <div>Back to HomePage </div>
          <div>
            <FaArrowRightLong className="flex items-center justify-center " />
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Error404;
