import React from "react";
import { news } from "../../data/index.js";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb.jsx";
import SimpleDetailsNewCard from "../../components/news/items/SimpleDetailsNewCard.jsx";
import SearchNews from "../../components/news/SearchNews.jsx";
import RecentNews from "../../components/news/RecentNews.jsx";
import Category from "../../components/Category.jsx";
import PopularNews from "../../components/news/PopularNews.jsx";
const CategoryNews = () => {
  const location = useLocation();
  const category = location.state;
  console.log(category);
  const newses = news[category];

  return (
    <div>
      <div className="py-4 bg-white shadow-sm">
        <div className="w-full px-[1.6rem] md:px-8">
          <Breadcrumb one="category" two={category} />
        </div>
      </div>
      <div className="w-full bg-slate-200">
        <div className="w-full px-[1.6rem] py-8 md:px-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {newses &&
                    newses.length > 0 &&
                    newses.map((item, i) => (
                      <SimpleDetailsNewCard
                        key={i}
                        news={item}
                        type="details-news"
                        height={200}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">

                  <RecentNews />
                  <div className="p-4 bg-white">
                    <Category titleStyle={"text-gray-700 font-bold"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <PopularNews type="Popular news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
