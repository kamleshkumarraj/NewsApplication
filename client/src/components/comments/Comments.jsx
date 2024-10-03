
import { Link, useNavigate } from "react-router-dom";
import styles from "./comments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../store/slices/NewsHandling.slices";
import { useState } from "react";
import { apiCalling } from "../../api/apiCalling.api";
import {toast} from 'react-toastify'
import { getSelf } from "../../store/slices/selfHandler.slice";



const Comments = ({comments , id}) => {
  const navigate = useNavigate()
  const [comment , setComment] = useState("");
  const dispatch = useDispatch();
  const [data , setData] = useState(comments)
  console.log(id)
  let user = useSelector(getSelf)
  if(Object.keys(user).length > 0){
    user = 'authenticated'
  }else user = 'unauthintacated'
  const createComment = async (e) => {
    if(user == 'unauthintacated') navigate('/login')
    e.preventDefault();
    const options = {
      url : `http://localhost:5000/api/v1/news/create-comment/${id}`,
      formData : {comment},
      method : "POST",
      contentType : "application/json"
    }
    const response = await dispatch(apiCalling(options));
    if(response?.success){
      toast.success(response.message);
      setData(response.data);
    }else toast.error(response?.message)
    
  }
  
  console.log(comments)
  const status = "authenticated";
  const isLoading = false;
  return (
    <div className={styles.container} >
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={createComment} className={styles.button} >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map(({content , creator} , i) => (
              content.map((message , i) => {
               return <div className='my-[2rem]' key={i}>
                <div className='flex gap-[5rem] w-full'>
                  <div id="user" className="flex w-full gap-[1rem] items-start">
                  {creator.image && (
                    <div id="img" className="min-w-[6rem]   min-h-[6rem] ">
                    <img
                  src={creator.image}
                  alt=""
                  className="w-[5rem] h-[5rem] rounded-full"
                  />
                </div>
              )}
              <div >
                <span className="font-[600] text-[1.8rem]" >{creator.name}</span>
                <p className="font-[500] text-[1.4rem] text-[#484747d7]" >{message}</p>
              </div>
                  </div>
                    
                  <div id="date" className="ml-auto">
                   <span className={styles.date}>{}</span>
                  </div>
                </div>
                
              </div>
              })
              
            ))}
      </div>
    </div>
  );
};


export default Comments;
