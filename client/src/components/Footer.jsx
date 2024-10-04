import logo from "../assets/Images/compLogo.jpg";
import Category from "./Category";
import Gallery from "./news/Gallery";
import RecentNewsFooter from "./news/RecentNewsFooter";
import { Link } from "react-router-dom";
import facebookImg from "../assets/Images/facebook.png";
import instagramImg from "../assets/Images/instagram.png";
import youtubeImg from "../assets/Images/youtube.png";
import twitterImg from '../assets/Images/twitter-circle.png'
const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#1e1919]">
        <div className="grid justify-items-center w-full grid-cols-1 gap-12 px-[1.6rem] py-10 md:px-8 lg:grid-cols-4">
          <div className="w-full">
            <div className="w-full flex flex-col gap-y-[14px]">
              <img
                className=""
                width={200}
                height={100}
                src={logo}
                alt="logo"
              />
              <h2
                className="text-white"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                }}
              >
                Stay Connected with the Pulse of Bangladesh
                <span
                  style={{
                    display: "block",
                    fontSize: "12px",
                    marginTop: "10px",
                    color: "white",
                  }}
                >
                  We are committed to delivering accurate, timely, and
                  comprehensive news in Bangla, covering everything from
                  breaking headlines to in-depth analysis. Whether it&apos;s
                  local stories that matter to you or global events, we ensure
                  you’re always informed and engaged with the latest
                  developments. Stay rooted to your heritage and informed about
                  the world with us.
                </span>
              </h2>
              <hr
                style={{
                  borderColor: "red",
                  borderWidth: "2px",
                  marginBottom: "1px",
                }}
              />
              <h2
                style={{
                  color: "white",
                  fontSize: "32px",
                  marginBottom: "2px",
                }}
              >
                Contact Us
              </h2>
              <div style={{ display: "flex", gap: "15px" }}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterImg}
                    alt="twitter"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramImg}
                    alt="instagram"
                    width={24}
                    height={24}
                    style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebookImg}
                    alt="tiktok"
                    width={24}
                    height={24}
                    style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={youtubeImg}
                    alt="youtube"
                    width={24}
                    height={24}
                    style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
              </div>
            </div>
          </div>
          <Gallery />
          <div>
            <Category categories={[]} titleStyle="text-white" />
          </div>
          <RecentNewsFooter />
        </div>
      </div>
      <div className="bg-[#262323]">
        <div className="flex flex-col items-center justify-between gap-3 px-[1.6rem] py-5 md:px-8 md:flex-row">
          <div className="flex items-center justify-center w-full text-gray-400 gap-y-2 text-[1.4rem] gap-[1rem]">
            <span className="text-center">Copyright © All right reserved</span>
            <Link href={"#"}>www.ajkerkotha.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
