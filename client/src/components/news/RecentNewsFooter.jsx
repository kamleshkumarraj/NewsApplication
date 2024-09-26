import React from "react";
import { Link } from "react-router-dom";

const RecentNewsFooter = () => {
  const news = [];

  return (
    <div className="w-full flex flex-col gap-y-[14px]">
      <div className="text-[2rem] font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
        Recent news
      </div>
      <div className="grid grid-cols-1 pt-3 gap-y-4">
        {news &&
          news.length > 0 &&
          news.map((r, i) => {
            if (i < 4) {
              return (
                <Link key={i} href={`/news/${r.slug}`} className="flex w-full">
                  <div className="group relative overflow-hidden w-[90px] h-[75px]">
                    <div className="w-[90px] h-[75px] block group-hover:scale-[1.1] transition-all duration-[1s]">
                      <img
                        className=""
                        layout="fill"
                        src={r.image}
                        alt="images"
                      />
                      <div
                        className="absolute top-0 left-0 invisible block w-full h-full transition-all duration-300 bg-white cursor-pointer group-hover:visible opacity-5"
                        href={"#"}
                      ></div>
                    </div>
                  </div>
                  <div className="w-[calc(100%-90px)] pl-2">
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-[1.4rem] font-semibold text-white hover:text-[#c80000]">
                        {r.title}
                      </h2>
                      <div className="flex text-[1.2rem] font-normal text-white gap-x-2">
                        <span>{r?.date}</span>
                        <span>{r.writerName}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            } else return "hii";
          })}
      </div>
    </div>
  );
};

export default RecentNewsFooter;
