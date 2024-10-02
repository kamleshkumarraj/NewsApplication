import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profilePhoto from "../../assets/Images/profile-photo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { apiCalling } from "../../api/apiCalling.api";
import { getApiResponse } from "../../store/slices/apiResonseHandler.slice";
import { FaCamera } from "react-icons/fa";
import companylogo from "../../assets/Images/compLogo.jpg";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiResponse = useSelector(getApiResponse);
  const [errorConfig, setErrorConfig] = useState({
    imageErrror: "",
  });
  const [formDataLocal, setFormDataLocal] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  const formData = new FormData();

  

  Object.entries(formDataLocal).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const [previewImage, setPreviewImage] = useState(profilePhoto);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      url: "http://localhost:5000/api/v1/auth/register",
      method: "POST",
      formData,
      contentType: "multipart/form-data",
    };
    const data = await dispatch(apiCalling(options));

    if (data.success) {
      toast.success(data.message);
      navigate("/login");
    } else {
      toast.error(data.message);
    }
  };
  
  const ValidateImage = (preview) => {
    if (preview && preview.type.startsWith("image/")) {
      setErrorConfig((prev) => ({ ...prev, imageErrror: "" }));
      return true;
    } else {
      setErrorConfig((prev) => ({
        ...prev,
        imageErrror: "**Please upload a valid file.",
      }));
      return false;
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (ValidateImage(file)) setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFormDataLocal((prev) => ({ ...prev, avatar: e.target.files[0] }));
    }
  };

  
 
return (
  <div
    id="register-page"
    className="w-full min-h-screen flex justify-center items-center bg-cover bg-center"
    style={{
      backgroundImage: `url('https://img.freepik.com/premium-photo/breaking-news-graphic-with-red-background-dark-red-text_1106493-468434.jpg?w=1060')`, // Path to your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="w-full max-w-6xl p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl mx-auto">
      <div className="w-full grid lg:grid-cols-1 grid-cols-1">
        {/* Form Section */}
        <div id="form" className="flex flex-col justify-center w-full">
          <div className="flex justify-center">
                <img src={companylogo} alt="Company Logo" className="w-48" />
              </div>
          <h4 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Welcome Users!
          </h4>

          <form
            method="post"
            encType="multipart/form-data"
            action="http://localhost:5000/api/v1/auth/register"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full"
          >
            {/* Avatar Upload */}
            <div className="flex flex-col items-center">
              <label htmlFor="file" className="relative cursor-pointer">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={previewImage}
                    className="w-full h-full object-cover"
                    alt="profile-photo"
                  />
                </div>
                <FaCamera
                  size={"2rem"}
                  className={
                    previewImage === "/src/assets/profile-photo.png"
                      ? "absolute top-[0%] left-[62%]"
                      : "hidden"
                  }
                />
              </label>
              <input
                onInput={handleImage}
                id="file"
                className="hidden"
                type="file"
                name="avatar"
              />
              <p className="text-red-500 text-sm mt-2">{errorConfig.imageErrror}</p>
            </div>

            {/* Two Input Fields in One Row */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <InputField
                placeholder="Enter your firstname*"
                name="firstname"
                value={formDataLocal.firstname}
                setValue={setFormDataLocal}
                type="text"
                className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputField
                placeholder="Enter your lastname*"
                name="lastname"
                value={formDataLocal.lastname}
                setValue={setFormDataLocal}
                type="text"
                className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remaining Input Fields */}
            <InputField
              placeholder="Enter your middlename"
              name="middlename"
              value={formDataLocal.middlename}
              setValue={setFormDataLocal}
              type="text"
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <InputField
              placeholder="Enter your username*"
              name="username"
              value={formDataLocal.username}
              setValue={setFormDataLocal}
              type="text"
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              Note="Username must be unique!"
            />
            <InputField
              placeholder="Enter your email*"
              name="email"
              value={formDataLocal.email}
              setValue={setFormDataLocal}
              type="email"
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <InputField
              placeholder="Enter your password*"
              name="password"
              value={formDataLocal.password}
              setValue={setFormDataLocal}
              type="password"
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <InputField
              placeholder="Enter your confirm password*"
              name="confirmPassword"
              value={formDataLocal.confirmPassword}
              setValue={setFormDataLocal}
              type="password"
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit Button */}
            <button
              id="button"
              type="submit"
              className="w-full py-4 rounded-lg text-white font-semibold"
              style={{
                fontSize: "1.25rem",
                background: "linear-gradient(45deg, #5468FF, #59C3FF)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              {apiResponse?.apiStatus === true ? "Submitting..." : "Submit"}
            </button>

            {/* Divider */}
            <p className="text-center text-lg font-semibold text-gray-600">OR</p>

            {/* Redirect to Login */}
            <Link to="/login" className="text-center text-lg font-semibold">
              Already have an account?{" "}
              <span className="text-blue-600 hover:underline">Login Now</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
);



}

export default Register;
