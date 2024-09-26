import React from 'react'

const Title = ({ title }) => {
    return (
        <div className=' font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 text-[2.4rem] my-[1rem]'>
            {title}
        </div>
    )
}

export default Title