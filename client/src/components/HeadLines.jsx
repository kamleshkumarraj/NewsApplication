import React from "react";
import LoadingSpinner from "react-spinners-components";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HeadLines = ({ news }) => {

  
  return (
    <div className="flex flex-wrap bg-white shadow">
      <div className="flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30">
        <div className="flex items-center justify-start w-full py-2 pl-4 md:pl-8 gap-x-1">
          <span>
            <LoadingSpinner
              type="Ripple"
              colors={["#800000", "#c80000"]}
              size={"30px"}
            />
          </span>
          <h2 className="text-[#333333] font-semibold text-lg">Headlines</h2>
        </div>
      </div>
      <div className="flex md:w-[calc(100%-170px)] w-full">
        <div className="flex items-center justify-start w-full">
          <Marquee>
            {Object.keys(news).length > 0 &&
              Object.keys(news).map((c, i) => (
                <>
                  {news[c].length > 0 &&
                    news[c].slice(0,1).map((n, j) => (
                      
                      <Link
                        key={n._id}
                        className="py-[1.5rem] text-[1.4rem] block font-semibold text-[black]  pr-12  "
                     
                        
                      >
                      {n.title}
                        
                      </Link>
                    ))}
                </>
                
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeadLines;
