import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InputField from "./InputField";
import { getApiResponse } from "../../store/slices/apiResonseHandler.slice";
import { apiCalling } from "../../api/apiCalling.api";
import { setUser } from "../../store/slices/selfHandler.slice";
import loginImg from "../../assets/Images/reporter img.jpg";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import companyLogo from '../../assets/Images/compLogo.jpg'


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const apiResponse = useSelector(getApiResponse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "http://localhost:5000/api/v1/auth/login",
      formData,
      contentType: "application/json",
    };
    const data = await dispatch(apiCalling(options));
    if (data.success) {
      localStorage.setItem("tocken", data.tocken);
      toast.success(data.message);
      dispatch(setUser(data.user));
      navigate("/");
    } else toast.error(data.message);
  };
  const responseGoogleLogin = async (authResult) => {
    try {
      if (authResult["code"]) {
        const options = {
          method: "GET",
          url: `http://localhost:5000/api/v1/auth/login-google?code=${authResult["code"]}`,
          contentType: "application/json",
        };

        try {
          const data = await dispatch(apiCalling(options));
          if (data?.success) {
            localStorage.setItem("tocken", data.tocken);
            toast.success(data.message);
            dispatch(setUser(data.user));
            navigate("/");
          } else toast.error(data?.message);
        } catch (err) {
          console.log("Get error during accept response", err);
        }
      }
    } catch (err) {
      console.log("Get error during accept response from google", err);
    }
  };
  //! now we write code for authenticating from googel.
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogleLogin,
    onError: responseGoogleLogin,
    flow: "auth-code",
  });

  return (
    <div
      id="loginContainer"
      className="flex items-start justify-start w-full min-h-screen p-10 overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/breaking-news-graphic-with-red-background-dark-red-text_1106493-468434.jpg?w=1060')`,
      }}
    >
      <div className="grid w-full max-w-6xl pt-16 mt-10 place-content-center">
        <div
          id="login-page"
          className="grid grid-cols-1 gap-10 p-10 bg-white rounded-lg shadow-lg lg:grid-cols-2"
        >
          {/* Image Section */}
          <div id="img" className="hidden lg:block">
            <img
              src={loginImg}
              alt="Login"
              className="transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105"
              style={{ backdropFilter: `blur(2px)` }}
            />
          </div>
          {/* Form Section */}
          <div id="form" className="grid w-full place-content-center">
            <form
              onSubmit={handleLogin}
              className="flex flex-col w-full gap-6 p-8 mt-4 border border-gray-300 rounded-lg shadow-md"
              style={{
                boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 10px`,
              }}
            >
              <div className="flex justify-center">
                <img src={companyLogo} alt="Company Logo" className="w-48" />
              </div>
              <h3
                className="text-4xl font-semibold text-center text-gray-800"
                style={{ fontWeight: "600" }}
              >
                Login
              </h3>
              <InputField
                placeholder={"Enter your email*"}
                name={"email"}
                value={formData.email}
                setValue={setFormData}
                type={"email"}
              />
              <InputField
                placeholder={"Enter your password*"}
                name={"password"}
                value={formData.password}
                setValue={setFormData}
                type={"password"}
              />
              <Link id="forgot-pass" to={"/forgot-password"}>
                <span className="text-lg font-medium text-[#4a4b49] hover:text-[#1943ff] transition-colors">
                  Forgot password?
                </span>
              </Link>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-all duration-300 rounded-lg shadow-md hover:scale-105"
                style={{
                  fontSize: "1.8rem",
                  background: `linear-gradient(45deg , #5468FF ,#59C3FF)`,
                }}
              >
                {apiResponse?.apiStatus === true ? "Submitting..." : "Submit"}
                {apiResponse?.apiStatus && (
                  <div className="loader absolute left-[75%]"></div>
                )}
              </button>
              <p className="text-xl font-medium text-center">OR</p>
              <Link to="/signin" className="text-xl font-medium text-center">
                Already have an account?
                <span className="text-[#4a4b49] hover:text-[#1943ff] ml-1">
                  Register Now
                </span>
              </Link>

              {/* Google Login Button */}
              <div
                className="w-full py-4 rounded-lg flex justify-center items-center gap-4 bg-gradient-to-r from-[#A4B8FD] to-[#59C3FF] hover:bg-gradient-to-l hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={googleLogin}
              >
                <FcGoogle size="3rem" />
                <span className="text-xl text-white">
                  {apiResponse?.apiStatus === true
                    ? "Submitting..."
                    : "Login with Google"}
                </span>
                {apiResponse?.apiStatus && (
                  <div className="loader absolute left-[75%]"></div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
