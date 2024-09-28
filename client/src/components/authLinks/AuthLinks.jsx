
import styles from "./authLinks.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelf, setUser } from "../../store/slices/selfHandler.slice";
import { apiCalling } from "../../api/apiCalling.api";
import { toast } from "react-toastify";


const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(getSelf)
  const status = user?.firstname ? 'authenticated' : 'unauthenticated'
  
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    const options = {
      method : "POST",
      url : "http://localhost:5000/api/v1/auth/logout",
    }
    
      const response = await dispatch(apiCalling(options))
     
      if(response.success){
        toast.success("User logged out successfully")
        dispatch(setUser(undefined))
        localStorage.setItem('token',undefined)
      }else{
        toast.error("User logged out successfully !")
      }
    
  }
  return (
    <>
      {status === "unauthenticated" ? (
        <Link id="link" to="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          {user.userType=="Author" ?  <Link id="link" to="/write" className={styles.link}>
            Upload News
          </Link> : ""}
          <span onClick={() => {logoutHandler()}} id="link" className={styles.link} >
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link  href="/login">Login</Link>
          ) : (
            <>
              <Link to="/write">Write</Link>
              <p >Logout</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
