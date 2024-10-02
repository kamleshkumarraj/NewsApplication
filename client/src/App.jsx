import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchDataProvider from "./contexts/provideSearchData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCalling } from "./api/apiCalling.api";
import { setUser } from "./store/slices/selfHandler.slice";
import { getAllNewsCategories, setNewsCategories, setNewsList } from "./store/slices/NewsHandling.slices";
import { news } from "./data";
import axios from "axios";


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");
  const allCategoriesList = useSelector(getAllNewsCategories)
  
  //! method for saving all news in store in category wise.
  useEffect(() => {
    if(allCategoriesList.length> 0){
      const promiseList = allCategoriesList.map((category) => {
        const options = {
          url : `http://localhost:5000/api/v1/news/get-all?category=${category}`,
          method : "GET"
        }
        return axios(options)
      })
      Promise.all(promiseList).then((response) => {
        response.map(({data}) => {
          dispatch(setNewsList({data : data.data , category : data.data[0].category}))
        })
      })
      .catch((error) => console.log("We get error during fetching all news " , error))
    }
  },[allCategoriesList])
  
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
  },[])
  
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
