import Breadcrumb from "../../components/Breadcrumb";
import SearchNews from "../../components/news/SearchNews";
import RecentNews from "../../components/news/RecentNews";
import Category from "../../components/Category";
import RelatedNews from "../../components/news/RelatedNews";
import { news } from "../../data";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import {useRef, useState } from "react";
import axios from "axios";
import countries from "../../data/couontryData";

const Details = () => {
  const newsData = useLocation().state;
  
  const relateNews = news[newsData.category];
  const [currentLang , setCurrentLang] = useState({name : localStorage.getItem('currentLang') , code : localStorage.getItem('currentLangCode')})
  const [converetedLang , setConvertedLang] = useState({name : '' , code : ''});
  const supportedLangList = countries
  
  const descriptionTag = useRef();
  const handleSelect = (e) => {
    const langName = Object.entries(supportedLangList).length > 0 && Object.entries(supportedLangList).filter(([code]) => code == e.target.value)[0]
    
    setConvertedLang({name : langName[1] , code : e.target.value})
  }
  

  console.log("current" , currentLang)
  console.log("converted" , converetedLang)
  const translateNews = async () => {
    // now we write code for translating the news in user languuage.
    const description = (descriptionTag.current.innerText)
    //we write code for breaking our string in 500 words.
    const stringArr = [];
    for(let i=0; i<description.length; i= i+500){
      stringArr.push(description.substring(i,i+500))
    }
    const promiseArr = stringArr.map((string) => {
       return axios(`https://api.mymemory.translated.net/get?q=${string}&langpair=${currentLang.code}|${converetedLang.code}`)
    })
    const data = await Promise.all(promiseArr)
    const convertedData = data.map((resData) => {
      return resData.data.responseData.translatedText
    })
    setCurrentLang({name : converetedLang.name , code : converetedLang.code})
    
    descriptionTag.current.innerText = convertedData.toString()
  
    localStorage.setItem('currentLang'  , converetedLang.name)
    localStorage.setItem('currentLangCode' , converetedLang.code)
    
  }
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
                  <div className="flex flex-col px-[2.4rem] pb-6 gap-y-4">
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
                    <p ref={descriptionTag} className="text-[1.4rem]">{newsData?.description}</p>

                    <div id="translate-function" className="flex items-center justify-end w-full">
                      <div id="option" className="w-[40%]">
                        <select onChange={handleSelect} name="" id="" className="text-[1.8rem] font-[600] px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none  border-[#00000022] focus:border-[2px] bg-[#00000089] text-[white] focus:border-[#015107] focus:rounded-[.75rem]  rounded-t-[.5rem]  border-[blue] border-b-[2px] placeholder:text-gray-600 w-[80%]"  >
                          {
                            Object.keys(supportedLangList).length > 0 && Object.entries(supportedLangList).map(([code , name]) => (<option key={code} value={code} >{name}</option>))
                          }
                        </select>
                      </div>
                      <div id="button">
                        <p onClick={translateNews}  className="px-[4rem] hover:top-[-1%] transition-all relative py-[1.25rem] text-[1.8rem] border bg-[#7304d3] rounded-[.5rem] self-start text-white hover:cursor-pointer">Translate</p>
                      </div>

                    </div>
                  </div>
                  <div id="comment-section" className="px-[2rem]">
                    <Comments />
                  </div>
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
            <RelatedNews news={relateNews} type="Related news" />
            {/* <PopularNews type="Related news" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
