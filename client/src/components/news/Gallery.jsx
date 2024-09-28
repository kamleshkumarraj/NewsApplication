import React from "react";
import { news } from "../../data";

const Gallery = () => {
  const images = [];
  Object.entries(news).forEach(([key , val]) => {
    images.push(val[0].image)
  })

  return (
    <div className="w-full flex flex-col gap-y-[14px]">
      <div className="text-[2rem] font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
        Gallery
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images &&
          images.length > 0 &&
          images.map((item, i) => (
            <div key={i} className="w-full h-[85px] relative">
              <img className=""  src={item} alt="images" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
