
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SimpleNewsCard from './items/SimpleNewsCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import img from '../../assets/Images/fashion.png'

const LatestNews = ({news}) => {

    
    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

  

    const ButtonGroup = ({ next, previous }) => {
        return <div className='flex items-center justify-between'>
            <div className='text-[2.4rem] my-[1rem] font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3'>
                Popular news
            </div>
            <div className='flex items-center justify-center gap-x-3'>
                <button onClick={() => previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200' >
                    <span><FiChevronLeft /></span>
                </button>
                <button onClick={() => next()} className='w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200' >
                    <span><FiChevronRight /></span>
                </button>
            </div>
        </div>
    }
    return (
        <div className='flex flex-col-reverse w-full gap-3 pr-0 lg:pr-2'>
            <Carousel
                autoPlay={true}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                infinite={true}
                transitionDuration={500}
            >
                {
                   news && news.map((item, i) => <SimpleNewsCard item={item} key={i} type='latest' />)
                }
            </Carousel>
        </div>
    )
}

export default LatestNews