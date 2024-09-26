'use client'
import React, {  useState } from 'react'
import SimpleDetailsNewCard from './items/SimpleDetailsNewCard'
import { useSearchParams } from 'react-router-dom'

const SearchNews = () => {

    const [news, setNews] = useState([])
    const searchValue = useSearchParams()
   

    

    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {
                news && news.length > 0 && news.map((item, i) => (
                    <SimpleDetailsNewCard news={item} type="details-news" height={200} />
                ))
            }
        </div>
    )
}

export default SearchNews