import Breadcrumb from "../../components/Breadcrumb";
import SearchNews from "../../components/news/SearchNews";
import RecentNews from "../../components/news/RecentNews";
import Category from "../../components/Category";
import RelatedNews from "../../components/news/RelatedNews";
import { news } from "../../data";
import { useLocation } from "react-router-dom";

const Details = () => {
  const newsData = useLocation().state;
  const relateNews = news[newsData.category];

  return (
    <div>
      <div className="py-4 bg-white shadow-sm">
        <div className="w-full px-[1.6rem] md:px-8">
          <Breadcrumb
            one="sports"
            two={"ABET accreditation reaffirms UTSA’s"}
          />
        </div>
      </div>
      <div className="w-full bg-slate-200">
        <div className="w-full px-[1.6rem] py-8 md:px-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="flex flex-col bg-white gap-y-5">
                  <img src={newsData?.image} alt="" />
                  <div className="flex flex-col px-6 pb-6 gap-y-4">
                    <h3 className="text-[2rem] font-medium text-red-700 uppercase">
                      {newsData?.category}
                    </h3>
                    <h2 className="text-[1.8rem] font-bold text-gray-700">
                      {newsData?.title}
                    </h2>
                    <div className="flex text-[1.6rem] font-normal gap-x-2 text-slate-600">
                      <span>{newsData?.date}/</span>
                      <span>{newsData?.writerName}</span>
                    </div>
                    <p className="text-[1.4rem]">{newsData?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">
                  <SearchNews />
                  <RecentNews />
                  <div className="p-4 bg-white">
                    <Category titleStyle={"text-gray-700 font-bold"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <RelatedNews news={relateNews} type="Related news" />
            {/* <PopularNews type="Related news" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
