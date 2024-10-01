
import logo from "../assets/Images/compLogo.jpg";
import Category from "./Category";
import Gallery from "./news/Gallery";
import RecentNewsFooter from "./news/RecentNewsFooter";
import { Link } from "react-router-dom";

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
              <h2 className="text-slate-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </h2>
              <h2 className="text-slate-300">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur.
              </h2>
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
