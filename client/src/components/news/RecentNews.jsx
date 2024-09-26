import React from 'react'
import Title from '../Title'
import NewsCard from './items/NewsCard'
import { news } from '../../data'


const RecentNews =  () => {
const [recentNewsCate] = Object.keys(news);
const newsData = news[recentNewsCate]

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