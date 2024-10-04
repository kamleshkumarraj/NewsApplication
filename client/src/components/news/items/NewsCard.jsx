
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const NewsCard = ({ item }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow">
      <div className="relative h-full overflow-hidden group">
        <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[100px] md:w-[160px] h-[93px] lg:w-[100px] grid place-content-center relative">
          <img
            className="h-[100%] my-auto"
            src={item?.image}
            alt="images"
          />
          <div className="absolute top-0 left-0 invisible block w-full h-full transition-all duration-300 bg-white cursor-pointer group-hover:visible opacity-5"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 w-[calc(100%-100px)] md:w-[calc(100%-160px)] lg:w-[calc(100%-100px)] pl-3">
        <div
        
          className="text-[1.8rem] font-semibold text-[#c80000]"
        >
          {item?.category}
        </div>
        <Link
          to={`/category/page&id=${item._id}`}
          state={item}
          className="text-[1.4rem] font-semibold text-[#333333] hover:text-[#c80000]"
        >
          {item?.title}
        </Link>
        <div className="flex text-[1.3rem] font-normal gap-x-2 text-slate-600">
          <span>{item?.date}</span>
          <span>{item?.writerName}</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    id : PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    writerName: PropTypes.string,
  }),
};

export default NewsCard;
