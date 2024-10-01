import React from "react";

const PrintableNews = React.forwardRef(function PrintableNews(props, ref , nes) {
  return (
    <div ref={ref} className="flex flex-col bg-white gap-y-5">
      <img src={newsData?.image} alt="" />
      <div className="flex flex-col px-[2.4rem] pb-6 gap-y-4">
        <h3 className="text-[2rem] font-medium text-red-700 uppercase">
          {newsData?.category}
        </h3>
        <h2 className="text-[1.8rem] font-bold text-gray-700">
          {newsData?.title}
        </h2>
        <div className="flex text-[1.6rem] font-normal gap-x-2 text-slate-600">
          <span>{newsData?.date}/</span>
          <span>{newsData?.writerName}</span>
        </div>
        <p ref={descriptionTag} className="text-[1.4rem]">
          {newsData?.description}
        </p>
      </div>
    </div>
  );
});

export default PrintableNews;
