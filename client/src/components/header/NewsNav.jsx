import React, { useState } from "react";
import { FaFacebook, FaShareAlt, FaSave, FaPrint, FaThumbsUp, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io"; 

const NewsNavbar = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShareOptions = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <nav className="flex items-center justify-end py-[2rem] px-[3rem] text-white bg-gray-800">
      <div className="flex gap-[2rem] items-center">
        {/* Share Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#c94b4b8e]">
          <IoIosShareAlt color="red"
            onMouseEnter={toggleShareOptions}
            onMouseLeave={toggleShareOptions}
            size={'2.4rem'} className="text-xl cursor-pointer"
            />
            {/* Share Options Block */}
            {isShareOpen && (
                <div
                
              className="absolute gap-[2rem] left-[50%] translate-x-[-50%] top-[130%] w-[24rem] p-2 mt-2 text-black bg-white rounded-lg shadow-lg "
            >
              <ul  className="flex flex-col gap-[1.5rem]">
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                  <FaFacebook size={'2.4rem'} />
                  <span className="text-[1.4rem]" >Share on Facebook</span>
                </li>
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                  <FaTwitter size={'2.4rem'} />
                  <span className="text-[1.4rem]" >Share on Twitter</span>
                </li>
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                  <FaLinkedin size={'2.4rem'} />
                  <span className="text-[1.4rem]" >Share on LinkedIn</span>
                </li>
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                  <FaInstagram size={'2.4rem'} />
                  <span className="text-[1.4rem]" >Share on Instagram</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Save Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#7bceea8e]">
            <FaSave size={'2.4rem'} className="text-xl cursor-pointer" />
        </div>
        

        {/* Print Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#7bceea8e]">
            <MdLocalPrintshop color="" size={'2.4rem'} className="text-xl cursor-pointer" />
        </div>

        {/* Like Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#7bceea8e]">
            <FaThumbsUp size={'2.4rem'} className="text-xl cursor-pointer" />
        </div>

        {/* Facebook Icon */}
        <div className="relative rounded-full group ">
            <FaFacebook color="#0866FF" size={'3.8rem'} className="text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NewsNavbar;
