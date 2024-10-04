import { useSelector } from "react-redux";
import { getSelf } from "../store/slices/selfHandler.slice";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
    const user = useSelector(getSelf)
    const name = user?.firstname + " " + user?.lastname 
    const navigate = useNavigate()
    if(!user?.firstname) navigate('/login') 
  return (
    <div className="py-[4rem] p-4 bg-gray-100">
      <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="h-48 p-4 bg-center bg-cover" style={{ backgroundImage: `url('https://source.unsplash.com/featured/?nature')` }}>
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 overflow-hidden border-4 border-white rounded-full">
              <img src={user?.avatar?.url} alt="Profile" className="object-cover w-full h-full" />
            </div>
            
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          {/* User Information */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            
          </div>

          {/* Bio */}
          <div className="mt-4 text-center">
            
          </div>

          {/* Skills or Interests */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills & Interests</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="px-4 py-2 text-blue-600 bg-blue-100 rounded-full">JavaScript</span>
              <span className="px-4 py-2 text-green-600 bg-green-100 rounded-full">React</span>
              <span className="px-4 py-2 text-purple-600 bg-purple-100 rounded-full">Node.js</span>
              <span className="px-4 py-2 text-red-600 bg-red-100 rounded-full">Python</span>
              <span className="px-4 py-2 text-yellow-600 bg-yellow-100 rounded-full">Machine Learning</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Connect with Me</h3>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Recent Posts</h3>
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold text-gray-700">Understanding JavaScript Closures</h4>
                <p className="text-gray-600">Closures are one of the most powerful features in JavaScript. Learn how they work...</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold text-gray-700">React Hooks: The Complete Guide</h4>
                <p className="text-gray-600">React hooks make functional components more powerful. Heres a complete guide...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
