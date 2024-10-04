import { useSelector } from 'react-redux';
import Title from '../Title'
import SimpleDetailsNewCard from './items/SimpleDetailsNewCard'
import { getAllNews } from '../../store/slices/NewsHandling.slices';


const PopularNews = ({ type}) => {
    const news = useSelector(getAllNews)
    const popularNews = Object.keys(news).length > 0 && news['Agriculture'];
    
    return (
        <div className='w-full pb-8 mt-5'>
            <div className='flex flex-col w-full gap-y-[14px]'>
                <Title title="Agriculture" />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
                    {
                        PopularNews &&
                        popularNews.length > 0 && popularNews.map((item, i) => {
                            if (i < 4) {
                                return <SimpleDetailsNewCard news={item} type={type} item={item} key={i} height={230} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularNews