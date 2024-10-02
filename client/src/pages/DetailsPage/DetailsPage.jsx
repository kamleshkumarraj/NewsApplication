import Breadcrumb from "../../components/Breadcrumb";
import RecentNews from "../../components/news/RecentNews";
import Category from "../../components/Category";
import RelatedNews from "../../components/news/RelatedNews";
import { news } from "../../data";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { useRef} from "react";
import NewsNavbar from "../../components/header/NewsNav";
import {useReactToPrint} from 'react-to-print'
import News from "./News";


const Details = () => {
  const newsData = useLocation().state;
  
  const relateNews = news[newsData.category];
  
  
  const printableComponent = useRef();

  const descriptionTag = useRef();
  
  const handlePrint = useReactToPrint({
    contentRef : printableComponent
  })
  console.log(printableComponent)
  
  
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
            
              <div className="w-full pr-0 xl:pr-4 ">
              <NewsNavbar printfun = {handlePrint} />
                <News ref = {printableComponent} newsData = {newsData} descriptionTag = {descriptionTag} />
                </div>
              <div id="comment-section" className="px-[2rem]">
                <Comments />
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
            <RelatedNews news={relateNews} type="Related news" />
            {/* <PopularNews type="Related news" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
