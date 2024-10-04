import { useSelector } from "react-redux";
import HeadLines from "../components/HeadLines";
import DetailsNews from "../components/news/DetailsNews";
import DetailsNewsCol from "../components/news/DetailsNewsCol";
import DetailsNewsRow from "../components/news/DetailsNewsRow";
import NewsCard from "../components/news/items/NewsCard";
import SimpleNewsCard from "../components/news/items/SimpleNewsCard";
import LatestNews from "../components/news/LatestNews";
import PopularNews from "../components/news/PopularNews";
import Title from "../components/Title";
import { getAllNews,  getPopularNews, getRecentNews } from "../store/slices/NewsHandling.slices";
import {CirclesWithBar , Hourglass , BallTriangle , MutatingDots , RevolvingDot} from 'react-loader-spinner'


const Home = () => {
  const news = useSelector(getAllNews)
  const recentNews = useSelector(getRecentNews)
  const popularNews = useSelector(getPopularNews)
  
  return (
    <>
    {
      Object.keys(news)?.length > 0 ?
    
    <div>
      <main>
       { Object.keys(news).length > 0 && <HeadLines news={news} />}
        <div className="bg-slate-100">
          <div className="px-[1.6rem] py-8 md:px-8">
            <div className="flex flex-wrap ">
              <div className="w-full lg:w-6/12">
                { popularNews.length > 0 && <LatestNews news={popularNews} />}
              </div>
              <div className="w-full mt-5 lg:w-6/12 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                  <Title title="Recent" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] rounded-[1rem] overflow-hidden">
                    {recentNews.length > 0 && recentNews.map((item, i) => {
                      if (i < 4) {
                        return <SimpleNewsCard item={item} key={i} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>

            <PopularNews type="Agriculture" news={news["Travel"]} />
            {/* first section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  <DetailsNewsRow
                    news={news["Sports"]}
                    category="Sports"
                    type="details-news"
                  />
                  <DetailsNews news={news["Health"]} category="Health" />
                </div>
                <div className="w-full lg:w-4/12">
                  <DetailsNewsCol
                    news={news["Educations"]}
                    category="Educations"
                  />
                </div>
              </div>
            </div>
            {/* 2nd section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12">
                  {
                    <div className="pr-2">
                      <DetailsNewsCol
                        news={news["Politics"]}
                        category="Politics"
                      />
                    </div>
                  }
                </div>
                <div className="w-full lg:w-8/12">
                  <div className="pl-2">
                    <DetailsNewsRow
                      news={news["Disaster"]}
                      category="Disaster"
                      type="details-news"
                    />
                    <DetailsNews
                      news={news["International"]}
                      category="International"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  <div>
                    <DetailsNewsRow
                      news={news["Technology"]}
                      category="Technology"
                      type="details-news"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12">
                  <div className="pl-2">
                    <Title title="Educations" />
                    <div className="grid grid-cols-1 gap-y-[14px] mt-4">
                      {Object.keys(news).length > 0 &&  news["Educations"].slice(0, 4).map((item, i) => (
                        <NewsCard item={item} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div> : <div id="div" className="grid w-full h-full place-content-center">
                      <div id="box" className="flex lg:my-[10rem] my-[20rem] flex-col items-center">
                        <h1 className="text-[5rem] text-[#0000008e]">Loading....</h1>
                        <CirclesWithBar />
                      
                      </div>
    </div>
  } 
    </>
  );
};
export default Home;
