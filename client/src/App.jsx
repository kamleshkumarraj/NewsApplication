import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchDataProvider from "./contexts/provideSearchData";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiCalling } from "./api/apiCalling.api";
import { setUser } from "./store/slices/selfHandler.slice";
import { setNewsCategories, setNewsList } from "./store/slices/NewsHandling.slices";
import { news } from "./data";


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");

  //!method for login during the refresh the pages and.
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
  

  //! now we write code for fetching all news from database and server.
  useEffect(() => {
    (async function getAllNews(){
      const options = {
        method : "GET",
        url : 'http://localhost:5000/api/v1/news/get-all'
      }
      const response = await dispatch(apiCalling(options))
      console.log(response.data)
      if(response?.success) setNewsList(response?.data)
        else console.log("We getting error during fetching news from server !")
      
    })()
  },[])

  //! code for getting all news categoris.
  useEffect(() => {
    (async function getAllNewsCategories(){
        const options = {
          url : 'http://localhost:5000/api/v1/news/get-categories',
          method : "GET"
        }
        const response = await dispatch(apiCalling(options))
        if(response?.success) dispatch(setNewsCategories(response?.data))
        else console.log("We getting error during fetching news categories from server !")
    })()
  })

  

 
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
