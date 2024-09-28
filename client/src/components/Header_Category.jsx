"use client";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { SearchDataContext } from "../contexts/provideSearchData";

const Header_Category = () => {
  const path = useLocation().pathname;
  const [show, setShow] = useState("");
  const [search , setSearch] = useState("")
  const navigate = useNavigate();
  const categories = [
    "Sports",
    "Educations",
    "Politics",
    "Agriculture",
    "Technology",
    "International",
    "Health",
    "Disaster",
    "Entertainement & Culture",
    "Bussiness & Economy",
  ];
  const data = [];

  const {setSearchQuery} = useContext(SearchDataContext);
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(search)
    navigate(`/search/query=${search}`)
  }
  return (
    <div className="w-full">
      <div className="bg-[#c80000] w-full text-white uppercase font-semibold relative">
        <div className="px-8 flex justify-between items-center relative h-[48px]">
          <div
            className={`text-3xl flex lg:hidden font-bold h-full w-[48px] cursor-pointer justify-center items-center hover:bg-[#00000026]`}
          >
            <BsList />
          </div>
          <div className="flex-wrap hidden lg:flex text-[1.2rem]">
            <Link
              className={`px-[2.4rem] font-medium py-[13px] ${
                path === "/" ? "bg-[#00000026]" : ""
              }`}
              href={"/"}
            >
              Home
            </Link>
            {categories.length > 0 &&
              categories.map((c, i) => (
                <Link
                  key={i}
                  className={`px-[2.4rem] font-medium py-[13px] ${
                    path === c.category ? "bg-[#00000026]" : ""
                  }`}
                  to={`/category=${c}`}
                  state={c}
                >
                  {c}
                </Link>
              ))}
          </div>
          <div className="h-full w-[48px]">
            <div
              onClick={() => {
                setShow(!show);
              }}
              className={`text-[2rem] ${
                show ? "bg-[#00000026]" : ""
              } font-bold h-full w-full cursor-pointer justify-center flex items-center hover:bg-[#00000026]`}
            >
              {show ? <IoClose /> : <AiOutlineSearch />}
            </div>
            <div
              className={`absolute lg:block transition-all text-slate-700 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-[300px] right-0 ${
                show ? "visible" : "invisible"
              } `}
            >
              <div className="p-3 bg-white">
                <form className="flex">
                  <div className="w-[calc(100%-45px)] h-[40px]">
                    <input
                      value={search}
                      required
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="search"
                      className="w-full h-full p-2 border outline-none border-slate-300 bg-slate-100 text-[1.4rem]"
                    />
                  </div>
                  <button onClick={handleSearch}  className="w-[45px] hover:bg-red-700 cursor-pointer h-[40px] flex justify-center outline-none items-center bg-red-600 text-white text-[2rem]">
                    <AiOutlineSearch />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <div className="flex flex-wrap lg:hidden py-2 px-[30px]">
          <Link
            className={`px-[1.6rem] font-medium py-[5px] ${
              path === "/" ? "bg-[#00000026]" : ""
            }`}
            href={"/"}
          >
            Home
          </Link>
          {data.map((c, i) => (
            <Link
              key={c.id}
              className={`px-[1.6rem] font-medium py-[5px] ${
                path === c.name ? "bg-[#00000026]" : ""
              }`}
              href={"/"}
            >
              {c.name}
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default Header_Category;
