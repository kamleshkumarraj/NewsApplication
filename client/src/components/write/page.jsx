import "react-quill/dist/quill.bubble.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { apiCalling } from "../../api/apiCalling.api";
import { useDispatch } from "react-redux";
import { useState } from "react";

const WritePage = () => {
  const [file, setFile] = useState([]);
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const formData = new FormData();

  Object.values(file).forEach((file) => formData.append('newsImg' , file))
  formData.append('title',title);
  formData.append('category',category);
  formData.append('summary',summary);
  formData.append('content',content);

 

  const dispatch = useDispatch();

  
  const uploadNews = async (e) => {
    e.preventDefault();
    const options = {
      url: "http://localhost:5000/api/v1/news/admin/uploads-news",
      method: "POST",
      formData,
      contentType: "multipart/form-data",
    };
    const data = await dispatch(apiCalling(options));

    if (data.success) {
      toast.success(data.message);
     
    } else {
      toast.error(data.message);
    }
  };

  

  return (
    <div className="p-[4rem] bg-[#6b6b746a] flex flex-col gap-[4rem]  items-center w-full ">
      <h1 className="text-[2.4rem] ">Create you news</h1>
      <form
        method="post"
        encType="multipart/form-data"
        action="http://localhost:5000/api/v1/news/admin/uploads-news"
        onSubmit={uploadNews}
        className=" w-full border-[1px]  gap-[4rem]  flex-col p-[2rem] lg:grid-cols-2 grid grid-cols-1 border-[#f3f0f038] rounded-[1rem]"
      >
        <div
          id="left"
          className=" items-center w-full  gap-[4rem] flex  flex-col p-[2rem] lg:px-[5rem]"
        >
          <div id="title" className="w-full">
            <input
              className="text-[1.8rem]  w-full font-[600] px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none  border-[#00000022] focus:border-[2px] bg-[#00000089] text-[white] focus:border-[#015107] focus:rounded-[.75rem]  rounded-t-[.5rem]  border-[blue] border-b-[2px] placeholder:text-gray-600"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div id="cate" className="w-full">
            <select
              className="text-[1.8rem] font-[600] px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none  border-[#00000022] focus:border-[2px] bg-[#00000089] text-[white] focus:border-[#015107] focus:rounded-[.75rem]  rounded-t-[.5rem]  border-[blue] border-b-[2px] w-full placeholder:text-gray-600"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
          </div>
          <div id="content" className="flex flex-col w-full">
            <label className="text-[1.8rem] px-[2rem] py-[1rem]" htmlFor="">
              Enter your content here
            </label>
            <textarea
              onInput={(e) => setContent(e.target.value)}
              className="text-[1.8rem] font-[600] w-full px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none  border-[#00000022] focus:border-[2px] bg-[#00000089] text-[white] focus:border-[#015107] focus:rounded-[.75rem]  rounded-t-[.5rem]  border-[blue] border-b-[2px] placeholder:text-gray-600"
              name=""
              rows={2}
              id=""
            ></textarea>
          </div>
        </div>
        <div
          id="right"
          className="items-center w-full  gap-[4rem] flex  flex-col p-[2rem] lg:px-[5rem]"
        >
          <div id="summary" className="flex flex-col w-full">
            <label className="text-[1.8rem] px-[2rem] py-[1rem]" htmlFor="">
              Enter Summary for news
            </label>
            <textarea
              onInput={(e) => setSummary(e.target.value)}
              className="text-[1.8rem] font-[600] w-full px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none  border-[#00000022] focus:border-[2px] bg-[#00000089] text-[white] focus:border-[#015107] focus:rounded-[.75rem]  rounded-t-[.5rem]  border-[blue] border-b-[2px] placeholder:text-gray-600"
              name=""
              rows={2}
              id=""
            ></textarea>
          </div>
          <div id="file-upload" className="flex flex-col w-full ">
            <label
              className="text-[1.8rem] px-[2rem] py-[1rem] flex gap-[5rem] justify-center items-center border-[.5px] rounded-[1rem] hover:cursor-pointer"
              htmlFor="file1"
              id="fil"
            >
              <FaCloudUploadAlt size={"5rem"} />
              <p>Upload image for news</p>
            </label>
            <input
              className="hidden"
              type="file"
              name=""
              id="file1"
              multiple
              onInput={(e) => setFile(e.target.files)}
            />
          </div>
          <div
            id="submit"
            className="px-[4rem] hover:top-[-1%] transition-all relative py-[1.5rem] text-[1.8rem] border bg-[#7304d3] rounded-[.5rem] self-start text-white hover:cursor-pointer"
            style={{ transition: "all 5s linear" }}
          >
            <input
              className="border-none outline-none"
              type="submit"
              value={"Publish"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
