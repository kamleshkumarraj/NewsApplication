import React from 'react'
import Title from '../Title'
import NewsCard from './items/NewsCard'
import { useSelector } from 'react-redux'
import { getAllNews, getAllNewsCategories } from '../../store/slices/NewsHandling.slices'



const RecentNews =  () => {
    const news = useSelector(getAllNews)
    const categories = useSelector(getAllNewsCategories)
    const newsData =  Object.keys(news).length > 0 && categories.length > 0 && news[categories[categories.length -1]];

    return (
        <div className="w-full flex flex-col gap-y-[14px] bg-white pt-4">
            <div className="pl-4">
                <Title title="Recent news" />
            </div>
            <div className="grid grid-cols-1 gap-y-3">
                {
                    newsData && newsData.length > 0 && newsData.map((item, i) => (
                        <NewsCard key={i} item={item} />
                    ))}

            </div>
        </div>
    )
}

export default RecentNews