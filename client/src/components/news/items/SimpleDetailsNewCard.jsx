import React from "react";
import { Link } from "react-router-dom";
import {convert} from 'html-to-text'
import PropTypes from 'prop-types'

const SimpleDetailsNewCard = ({ news, type, height }) => {
  const description = 'Bangladesh and its people are living in a state of emergency. The country is facing a crisis of coronavirus, which has caused tremendous damage to the economy and healthcare system. The government has taken several measures to contain the spread of the virus, but the situation is still evolving. The country is in a state of crisis, and the people are facing many challenges.'
  return (
    
    <div className="bg-white shadow">
      <div className="relative overflow-hidden group">
        <div
          style={{ height: `${height}px` }}
          className={`w-full group-hover:scale-[1.1] transition-all duration-[1s]`}
        >
          <img className="w-[100%] h-[100%]"  src={news?.image} alt="images" />
        </div>
        <div className="absolute top-0 left-0 invisible block w-full h-full transition-all duration-300 bg-white cursor-pointer group-hover:visible opacity-5"></div>
        <div className="absolute flex items-start justify-start font-semibold text-white left-5 bottom-4 gap-x-2 gap-y-2">
          <div className="px-[10px] py-[5px]   bg-[#c80000] text-[1.5rem] rounded-[2px]">
            {news?.category}
          </div>
          
        </div>
      </div>
      <div className="p-5">
        <Link
          className="lg:text-[18px] text-[15px] font-semibold text-[#333333] hover:text-[#c80000]"
          to={`/category/page&id=${news.id}`}
          state={news}
        >
          {news?.title}
        </Link>
        <div className="flex lg:text-[14px] text-[12px] font-normal gap-x-2 text-slate-600">
          <span>{news?.date}</span>
          <span>{news?.writerName}</span>
        </div>
        {type === "details-news" && (
          <p className="pt-3 text-[12px] text-slate-600">
            {
              convert(description).slice(0, 200)
              // 'Hii here is converter funuction'
            }
          </p>
        )}
      </div>
    </div>
          
  );
          
};

SimpleDetailsNewCard.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string,
    id : PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    writerName: PropTypes.string,
  }),
  height: PropTypes.number,
  type: PropTypes.string 
};

export default SimpleDetailsNewCard;
