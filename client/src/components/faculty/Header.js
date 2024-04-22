import React from "react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login/facultylogin");
  };
return (
  <div className="mx-0 my-0"> 
    <div className="flex-[0.05] flex justify-between items-center bg-black border-white border-t-0 border-l-0 border-r-0 border-b-0 p-4 ">
      {/* Added border-t-0, border-l-0, border-r-0, border-b-0 to remove all borders */}
      <div className="flex items-center">
        <h1 className="font-bold text-white text-2xl">BlackBoard</h1>
      </div>
      <h1 className="font-semibold text-white">Welcome</h1>
      <div className="flex items-center space-x-3">
        <Avatar
          src={user.result.avatar}
          alt={user.result.name.charAt(0)}
          sx={{ width: 47, height: 47 }}
          className="border-red-400 border-2"
        />
        <h1 className="text-white">{user.result.name.split(" ")[0]}</h1>
        <LogoutIcon
          onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all text-white"
        />
        
      </div>
    </div>
    <marquee behavior="scroll"
direction="left"
scrollamount="22"

style= {
        {
        textShadow:
      "0 0 5px #000, 0 0 10px #000, 0 0 15px #000, 0 0 20px #000, 0 0 25px #000, 0 0 30px #000, 0 0 35px #000",
    color: "#ffffff",
    fontSize: "127%",
    backgroundColor: "#e6e6e6"
            
    }
}

>Important ! ! ! </marquee>
  </div>
);





};

export default Header;
