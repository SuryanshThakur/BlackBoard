import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen bg-gray-100 bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url("https://www.chitkara.edu.in/wp-content/uploads/2023/04/Web-2020-Head-60.webp")`,
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-center mx-auto bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden w-[470px] h-[270px]">
        <div className="w-2/3 px-8 py-12">
          <h1 className="text-3xl font-semibold mb-8">Login</h1>
          <div className="flex flex-col space-y-4">
            <Link
              to="/login/facultylogin"
              className="bg-red-500 hover:bg-gray-200 text-black py-3 rounded-lg text-center transition-all duration-300"
            >
              Faculty Login
            </Link>
            <Link
              to="/login/studentlogin"
              className="bg-red-500 hover:bg-gray-200 text-black py-3 rounded-lg text-center transition-all duration-300"
            >
              Student Login
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-center py-6">
            <img
              src="https://seeklogo.com/images/C/chitkara-university-logo-E3DAB4AADD-seeklogo.com.png"
              alt="Chitkara University Logo"
              className="w-32 h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
