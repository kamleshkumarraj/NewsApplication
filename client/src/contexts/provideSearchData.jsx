import { createContext, useEffect, useState } from "react"
import useSearch from "../hooks/useSearch"
import { news } from "../data"
import {useDispatch} from 'react-redux'
import { apiCalling } from "../api/apiCalling.api"

export const SearchDataContext = createContext()


function SearchDataProvider({children}) {
    const [filteredData , setSearchQuery] = useSearch(news , (data) => data.title)
    const [recentNewsData , setNewsData] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
      (async function(){
        const options = {
          url : 'http://localhost:5000/api/v1/news/get-all',
          method : 'GET'
        }
       const response = await dispatch(apiCalling(options))
       if(response.success) {
        setNewsData(response.data)
       }else{
         console.log('Error while fetching data')
       }
      })()
    },[])
  return (
    <SearchDataContext.Provider value={{filteredData , setSearchQuery , recentNewsData}} >
        {children}
    </SearchDataContext.Provider>
  )
}

export default SearchDataProvider
