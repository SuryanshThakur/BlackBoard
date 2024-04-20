import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotice } from "../../redux/actions/adminActions";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FacultyHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);
 return (
    <div className="bg-[#b5b5b5] min-h-screen flex flex-col items-center justify-center " >
       
      <div className="flex flex-col bg-[#b5b5b5] h-[100%] w-[100%] space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
          
        </div>
        
      </div>
    </div>
  );
};

export default FacultyHome;
