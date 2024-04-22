import React from "react";
import Body from "./Body";

import Header from "../../../Header";

const FirstTimePassword = () => {
  return (
    <div className="bg-[#b5b5b5] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#b5b5b5] h-[100%] w-[100%]  ">
        <Header />
        <div className="flex flex-[0.95] w-full">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default FirstTimePassword;
