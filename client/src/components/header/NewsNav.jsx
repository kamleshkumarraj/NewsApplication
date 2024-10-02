import React, { useState } from "react";
import {
  FaFacebook,
  FaSave,
  FaThumbsUp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import './NewsNav.css'
import {
  FacebookMessengerShareButton,
  LinkedinShareButton  ,
  InstapaperShareButton  ,
  TwitterShareButton  ,
  FacebookShareButton  ,
} from "react-share";

const NewsNavbar = ({ printfun }) => {
  const url = window.location.href;
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShareOptions = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <nav className="flex items-center justify-end py-[2rem] px-[3rem] text-white bg-gray-800">
      <div className="flex gap-[2rem] items-center">
        {/* Share Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#c94b4b8e]" id="share-btn">
          <IoIosShareAlt
            color="red"
            size={"2.4rem"}
            className="text-xl cursor-pointer"
          />
          {/* Share Options Block */}
          
            <div className="absolute gap-[2rem] left-[50%] translate-x-[-50%] top-[100%] w-[24rem] p-2 mt-2 text-black bg-white rounded-lg shadow-lg hidden" id="share-box">
              <ul className="flex flex-col gap-[1.5rem]">
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                  <FacebookMessengerShareButton url={url} className='flex gap-[2rem] items-center' >
                    <FaFacebook size={"2.4rem"} />
                    <span className="text-[1.4rem]">Share on Facebook</span>
                  </FacebookMessengerShareButton>
                </li>
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <TwitterShareButton url={url} className='flex gap-[2rem] items-center'  >
                  <FaTwitter size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on Twitter</span>
                </TwitterShareButton  >
                </li>
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <LinkedinShareButton url={url} className='flex gap-[2rem] items-center'  >
                  <FaLinkedin size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on LinkedIn</span>
                </LinkedinShareButton  >
                </li>
                <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <InstapaperShareButton url={url} className='flex gap-[2rem] items-center'  >
                  <FaInstagram size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on Instagram</span>
                </InstapaperShareButton  >
                </li>
              </ul>
            </div>
      
        </div>

        {/* Save Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#7bceea8e]">
          <FaSave size={"2.4rem"} className="text-xl cursor-pointer" />
        </div>

        {/* Print Icon */}
        <div
          onClick={printfun}
          className="relative group p-[.8rem] rounded-full bg-[#7bceea8e]"
        >
          <MdLocalPrintshop
            color=""
            size={"2.4rem"}
            className="text-xl cursor-pointer"
          />
        </div>

        {/* Like Icon */}
        <div className="relative group p-[.8rem] rounded-full bg-[#7bceea8e]">
          <FaThumbsUp size={"2.4rem"} className="text-xl cursor-pointer" />
        </div>

        {/* Facebook Icon */}
        <FacebookShareButton   url={url}>
          <div className="relative rounded-full group ">
            <FaFacebook
              color="#0866FF"
              size={"3.8rem"}
              className="text-xl cursor-pointer"
            />
          </div>
        </FacebookShareButton  >
      </div>
    </nav>
  );
};

export default NewsNavbar;
