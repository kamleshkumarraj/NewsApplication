import Footer from "../components/Footer";
import HeadLines from "../components/HeadLines";
import DetailsNews from "../components/news/DetailsNews";
import DetailsNewsCol from "../components/news/DetailsNewsCol";
import DetailsNewsRow from "../components/news/DetailsNewsRow";
import NewsCard from "../components/news/items/NewsCard";
import SimpleNewsCard from "../components/news/items/SimpleNewsCard";
import LatestNews from "../components/news/LatestNews";
import PopularNews from "../components/news/PopularNews";
import Title from "../components/Title";
import { news } from "../data/index";

const Home = () => {
  return (
    <div>
      <main>
        <HeadLines news={news} />
        <div className="bg-slate-100">
          <div className="px-[1.6rem] py-8 md:px-8">
            <div className="flex flex-wrap ">
              <div className="w-full lg:w-6/12">
                <LatestNews news={news["Educations"]} />
              </div>
              <div className="w-full mt-5 lg:w-6/12 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                  <Title title="Technology" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] rounded-[1rem] overflow-hidden">
                    {news["Technology"].map((item, i) => {
                      if (i < 4) {
                        return <SimpleNewsCard item={item} key={i} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>

            <PopularNews type="Popular news" news={news["Travel"]} />
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
                      news={news["Agriculture"]}
                      category="Agriculture"
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
                    <Title title="Recent news" />
                    <div className="grid grid-cols-1 gap-y-[14px] mt-4">
                      {news["Disaster"].slice(0, 4).map((item, i) => (
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
    </div>
  );
};
export default Home;
