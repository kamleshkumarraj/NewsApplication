import React from "react";
import { Link } from "react-router-dom";

const SimpleNewsCard = ({ item, type }) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-[1rem]">
        <div
          className={`${
            type ? "h-[270px] sm:h-[470px] rounded-[1rem]" : "h-[225px]"
          } w-full rounded-[1rem] group-hover:scale-[1.2] transition-all duration-[1s]`}
        >
          <img className="w-[100%] h-[100%] rounded-[1rem]" layout="fill" src={item.image} alt="images" />
        </div>
      </div>
      <div className="absolute  top-0 left-0  block w-full h-full transition-all duration-300 cursor-pointer bg-[#0000006c] "></div>
      <div className="absolute flex flex-col items-start justify-start font-semibold text-white left-5 bottom-4 gap-y-2">
        <div className="px-[10px] py-[5px] rounded-[2px] text-[14px] bg-[#c80000]">
          {item.category}
        </div>
        <Link to={`/category/page&id=${item._id}`}
        state={item} className="text-[1.6rem]">
          {item.title}
        </Link>
        <div className="flex text-[1.4rem] font-normal gap-x-2">
          <span>{item.date}</span>
          <span>{item.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCard;
