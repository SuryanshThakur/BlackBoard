import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";
import { studentSignIn } from "../../../redux/actions/studentActions";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  useEffect(() => {
    if (store.errors) {
      setError(store.errors);
    }
  }, [store.errors]);

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(studentSignIn({ username, password }, navigate));
  };

  useEffect(() => {
    if (store.errors) {
      setLoading(false);
      setUsername("");
      setPassword("");
    }
  }, [store.errors]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url("https://www.chitkara.edu.in/wp-content/uploads/2023/04/Web-2020-Head-60.webp")`,
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-center mx-auto bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden w-[470px] h-[297px]">
        <div className="w-2/3 px-8 py-12">
          <h1 className="text-4xl font-semibold mb-17">Student Login</h1>
          <form onSubmit={login} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-[#515966] font-bold text-sm">Username</p>
              <div className="bg-[#515966] rounded-lg w-[14rem] flex items-center">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  required
                  className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[#515966] font-bold text-sm">Password</p>
              <div className="bg-[#515966] rounded-lg px-2 flex items-center">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  type={showPassword ? "text" : "password"}
                  className="bg-[#515966] text-white rounded-lg outline-none py-2 placeholder:text-sm"
                  placeholder="Password"
                />
                {showPassword ? (
                  <VisibilityIcon
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-gray-200 text-black py-3 rounded-lg text-center transition-all duration-300"
            >
              {loading ? <Spinner size={20} color="white" /> : "Login"}
            </button>
            {(error.usernameError || error.passwordError) && (
              <p className="text-red-500">
                {error.usernameError || error.passwordError}
              </p>
            )}
          </form>
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

export default StudentLogin;
