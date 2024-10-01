import React from "react";
import { Link } from "react-router-dom";
import { news } from "../data";

const Category = ({ titleStyle }) => {
  const categories = [
    "Sports",
    "Educations",
    "Politics",
    "Agriculture",
    "Technology",
    "International",
    "Health",
    "Disaster",
    "Entertainement & Culture",
    "Bussiness & Economy",
  ];

  return (
    <div className="w-full flex flex-col sm:gap-y-[14px]">
      <div
        className={`text-[2rem] font-bold ${titleStyle} relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3`}
      >
        Category
      </div>
      <div
        className={`flex flex-col justify-start items-start text-[1.4rem] gap-y-3 ${titleStyle} pt-3`}
      >
        {categories &&
          categories.length > 0 &&
          categories.map((item, i) => (
            <li className="list-none text-[1.4rem] text-center" key={i}>
              <Link
                className="my-[.2rem] block text-center"
                to={`/category=${item}`}
                state={item}
              >
                {item} 10
              </Link>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Category;
