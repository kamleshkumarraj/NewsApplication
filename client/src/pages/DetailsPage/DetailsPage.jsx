//! import area.
import Breadcrumb from "../../components/Breadcrumb";
import RecentNews from "../../components/news/RecentNews";
import Category from "../../components/Category";
import RelatedNews from "../../components/news/RelatedNews";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { useEffect, useRef, useState, } from "react";
import NewsNavbar from "../../components/header/NewsNav";
import {useReactToPrint} from 'react-to-print'
import { useDispatch, useSelector } from "react-redux";
import { getAllNews, likedNews, setLikeCount } from "../../store/slices/NewsHandling.slices";
import News from "./News";
import { apiCalling } from "../../api/apiCalling.api";
import { toast } from "react-toastify";
import { getSelf } from "../../store/slices/selfHandler.slice";

//* JSX element
const Details = () => {
  
  //* variable declartion area.
  const newsData = useLocation().state;
  const news = useSelector(getAllNews)
  const relateNews = news[newsData?.category];
  const dispatch = useDispatch();
  const printableComponent = useRef();
  const descriptionTag = useRef();
  const user = useSelector(getSelf)
  const status = user?.firstname ? 'authenticated' : 'unauthenticated'
  
  //* state variable area.
  const [likeInformationForNews , setLikeInformationForNews] = useState([])
  const [newsViewerList , setNewsViewerList] = useState([]);
  
  
  //* api fetching area.
  useEffect(() => {
    const options = {
      url : `http://localhost:5000/api/v1/news/get-liked-news/${newsData._id}`,
      method : "GET",
    };
    (async function getLikedNews(){
      const response = await dispatch(apiCalling(options))
        if(response?.success){
          dispatch(setLikeCount(response?.data?.length))
          setLikeInformationForNews(response?.data)
        }else console.log("Liked news fetching failed !")
    })()
  },[])

  useEffect(() => {
    const options = {
      method : 'GET',
      url : `http://localhost:5000/api/v1/news/get-all-viewers/${newsData._id}`
    };
    (async function getAllViewers() {
      const response = await dispatch(apiCalling(options))
      if(response?.success) {
        console.log("All viewers get successfully ")
        setNewsViewerList(response?.data)
      }
      else console.log("viewers fetching failed !")
    })()

    
      ;(async function createViews(){
        if(alreadyViewed()) {
          console.log("User alredy views the news !")
           return
          }
        const options = {
          url : `http://localhost:5000/api/v1/news/views-news/${newsData._id}`,
          method : "GET"
        }
        const response = await dispatch(apiCalling(options))
        if(response?.success) console.log("User views the news successfull !")
        else console.log("User views the news failed !")
      })()  
    
  },[])

  useEffect(() => {
    
  },[newsViewerList])
   

  //*Working or handling function area.
  const handlePrint = useReactToPrint({
    contentRef : printableComponent
  })
  const checkLiked =  ({userId}) => { 
    return likeInformationForNews.find(({creator}) => creator == userId)
  }
  
  const handleDislikeNews = async () => {
    const options = {
      url : `http://localhost:5000/api/v1/news/dislike-news/${newsData._id}`,
      method : "DELETE",
    }
    const response = await dispatch(apiCalling(options))
    if(response?.success){
      toast.success(response?.message)
      dispatch(setLikeCount(response?.data?.length))
      setLikeInformationForNews(response?.data)
    }else toast.error("Dislike failed !")
  }
  const handleLike = async () => {
    if(status == 'unauthenticated') {
      toast.error("Please login first !");
      return
    }
    //* check user is already liked this news or not.
    if(checkLiked({ userId : user?._id})){
      handleDislikeNews();
      return
    }
    
    const options = {
      url : `http://localhost:5000/api/v1/news/liked-news/${newsData._id}`,
      method : "PUT"
    }
    const response = await dispatch(apiCalling(options))
    if(response?.success){
      toast.success(response?.message)
      setLikeInformationForNews(response?.data)
      dispatch(likedNews())
    }
  }
  const alreadyViewed = () => {
    return newsViewerList.find(({viewers}) => viewers == user?._id)
  }

  
  
  return (
  <>
  {
   relateNews && relateNews.length > 0 && 
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
              <NewsNavbar likedHandler = {handleLike}  id={newsData?._id} printfun = {handlePrint} />
                <News ref = {printableComponent} newsData = {newsData} descriptionTag = {descriptionTag} />
                </div>
              <div id="comment-section" className="px-[2rem]">
                <Comments comments={newsData.comment} id={newsData._id} />
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
  }
    </>
  );
};

export default Details;
