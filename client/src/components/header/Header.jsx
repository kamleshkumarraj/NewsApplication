
import styles from "./header.module.css";
import facebookImg from '../../assets/Images/facebook.png'
import instagramImg from '../../assets/Images/instagram.png'
import youtubeImg from '../../assets/Images/youtube.png'
import AuthLinks from "../authLinks/AuthLinks";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { useSelector } from "react-redux";
import { getSelf } from "../../store/slices/selfHandler.slice";
import profileImg from '../../assets/Images/profile-photo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";





const BlogHeader = () => {
  const userData = useSelector(getSelf)
  const [isOpen, setIsOpen] = useState(false);
  const [selectLang , setSelectLang] = useState('Language');
  const userImg = userData?.avatar?.url
    useGSAP(() =>{
      const timeline = gsap.timeline();
      timeline.from("#nav-image img" , {
        y : -40,
        duration : .3,
        opacity : 0,
        stagger : 0.1,
        delay : .1
      })

      timeline.from('#header-text',{
        opacity : 0,
        y : -30,
        fontSize : '30px',
        duration : .2
      })

      timeline.from(`#header-link #link`,{
        y : -40,
        duration : .3,
        opacity : 0,
        stagger : 0.2,
        delay : .1
      })

    })
    const langList = ['India' , "Russia" , "America" , "Canada" , "Bangladesh" , "Australia" , "China" , "Japan" , "Korea" , "Spain" , "France" , "Germany" ]
    // now we write code for logout the user.
    
  return (
    <div className={styles.container} >
      <div id="nav-image" className={styles.social}>
        <img src={facebookImg} alt="facebook" width={24} height={24} />
        <img src={instagramImg} alt="instagram" width={24} height={24} />
        <img src={facebookImg} alt="tiktok" width={24} height={24} />
        <img src={youtubeImg} alt="youtube" width={24} height={24} />
      </div>
      <div id="header-link" className={styles.links}>
      <div className="relative inline-block">
      {/* Menu Button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 text-white border-[.5px] hover:border-[#ffffffcb] border-[#ffffff4e] rounded"
      >
        <div id="div" className="relative flex items-center justify-center ">
          <div id="icons">
            <TbWorld size={'3rem'} />
          </div>
          <div id="lng" className="mx-[1rem]">{selectLang}</div>
          <div id="icons" className="self-end">
            <IoMdArrowDropdown size={'2rem'}/>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-[50%] translate-x-[-50%] top-[95%] w-[20rem] mt-2 bg-white border border-gray-200 rounded shadow-lg px-[2rem] z-[9999] py-[1rem]"
        >
          
          {
            langList.map((item) => (
              <div id="menu-item" className="flex gap-[1rem] border-b-[.5px] border-[#00000013] my-[1rem]" key={item}>
                <input onChange={(e) => setSelectLang(e.target.value)}
                 id="radio" value={item} name="lang" type="radio" />
                <label htmlFor="radio">{item}</label>
              </div>
            ))
          }
        </ul>
      )}
    </div>
        <AuthLinks  />
        
        <div id="profile-img">
          <img src={userImg ? userImg : profileImg} className="w-[4rem] h-[4rem] rounded-full" alt="" />
        </div>
        <div id="bar"></div>
      </div>
    </div>
  );
};

export default BlogHeader;