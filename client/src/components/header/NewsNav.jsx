import img from "../../assets/NewsImg/agriculture-img-1.jpg";
import {
  FaFacebook,
  FaSave,
  FaThumbsUp,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import "./NewsNav.css";
import twitterImg from '../../assets/Images/instagram.png'
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,

} from "react-share";
import {useSelector} from 'react-redux'
import { getLikedCount } from "../../store/slices/NewsHandling.slices";

const NewsNavbar = ({ printfun , likedHandler  , id}) => {
  const url = window.location.href;
  const likedCount = useSelector(getLikedCount)

  return (
    <nav className="flex items-center justify-end py-[2rem] px-[3rem] text-white bg-gray-800">
      <div className="flex gap-[2rem] items-center">
        {/* Share Icon */}
        <div
          className="relative group p-[.8rem] rounded-full bg-[#c94b4b8e]"
          id="share-btn"
        >
          <IoIosShareAlt
            color="red"
            size={"2.4rem"}
            className="text-xl cursor-pointer"
          />
          {/* Share Options Block */}

          <div
            className="absolute gap-[2rem] left-[50%] translate-x-[-50%] top-[100%] w-[24rem] p-2 mt-2 text-black bg-white rounded-lg shadow-lg hidden"
            id="share-box"
          >
            <ul className="flex flex-col gap-[1.5rem]">
              <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <FacebookShareButton
                  title={"this is the best news"}
                  summary={img}
                  url={url}
                  className="flex gap-[2rem] items-center"
                >
                  <FaFacebook size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on Facebook</span>
                </FacebookShareButton>
              </li>
              <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <TwitterShareButton
                  url={url}
                  className="flex gap-[2rem] items-center"
                >
                  <FaTwitter size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on Twitter</span>
                </TwitterShareButton>
              </li>
              <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <LinkedinShareButton
                  url={url}
                  className="flex gap-[2rem] items-center"
                >
                  <FaLinkedin size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on LinkedIn</span>
                </LinkedinShareButton>
              </li>
              <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <a
                  href="https://www.instagram.com/your_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <img
                    src={twitterImg}
                    alt="Instagram"
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="text-[1.4rem] px-[1.8rem]">Share on Instagram</span>
                </a>
                
              </li>
              <li className="flex items-center p-2 space-x-2 hover:bg-gray-200">
                <WhatsappShareButton
                  url={url}
                  className="flex gap-[2rem] items-center"
                >
                  <FaWhatsapp size={"2.4rem"} />
                  <span className="text-[1.4rem]">Share on WhatsApp</span>
                </WhatsappShareButton>
              </li>
            </ul>
          </div>
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
        <div className="relative group p-[.8rem] rounded-full bg-[#6cabd28e]">
          <FaThumbsUp onClick={likedHandler} size={"2.4rem"} className="text-xl cursor-pointer" />
          <p className="absolute w-[2rem] h-[2rem] grid place-content-center  rounded-full text-[white] text-[1.4rem] bg-[#e13f3fcb] top-[-20%] right-[-10%]">{likedCount}</p>
        </div>

        {/* Facebook Icon */}
        <FacebookShareButton url={url}>
          <div className="relative rounded-full group ">
            <FaFacebook
              color="#0866FF"
              size={"3.8rem"}
              className="text-xl cursor-pointer"
            />
          </div>
        </FacebookShareButton>
      </div>
    </nav>
  );
};

export default NewsNavbar;
