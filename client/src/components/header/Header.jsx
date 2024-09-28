
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





const BlogHeader = () => {
  const userData = useSelector(getSelf)
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
        <AuthLinks  />
        <div id="profile-img">
          <img src={userImg ? userImg : profileImg} className="w-[4rem] h-[4rem] rounded-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;