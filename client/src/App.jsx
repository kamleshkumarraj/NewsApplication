import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchDataProvider from "./contexts/provideSearchData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCalling } from "./api/apiCalling.api";
import { toast } from "react-toastify";
import { setUser } from "./store/slices/selfHandler.slice";
import { changeLanguage, getAllNews, setNewsList } from "./store/slices/NewsHandling.slices";
import { news } from "./data";


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async function login(){
      const options = {
        method : "GET",
        url : `http://localhost:5000/api/v1/auth/direct-login?token=${token}`
      }
     const res = await dispatch(apiCalling(options))
     if(res?.success){
       dispatch(setUser(res.data))
     }
    })()
  })
  useEffect(() => {
    dispatch(setNewsList(news))
  },[])

  

 
  //action dispatch for set all news in store.
  
  
  return (
    <>
    <div className="relative wrapper " >
      <SearchDataProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchDataProvider>
          
      </div>
    </>
  );
}

export default App;
