import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Body from "./Body";

const AddDepartment = () => {
  return (
    <div className="bg-[#b5b5b5] min-h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#b5b5b5] h-[100%] w-[100%]   overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
