import React from "react";
import { Link } from "react-router-dom";

const ShowNotice = ({ notice }) => {
  return (
    <div className="flex flex-col space-y-3 ">
      <div className="flex justify-between">
        <h1>
          <span className="font-bold">From: </span>
          {notice.from}
        </h1>
        <h1>{notice.date}</h1>
      </div>
      <h1 className="self-center font-semibold text-lg">{notice.topic}</h1>
      <p className="max-w-[50rem] overflow-x-hidden overflow-y-auto h-[7rem]">
        {notice.content}
      </p>
      {/* Link to navigate to AddFiles */}
      <Link
        to="/addFiles/" // Adjust the route according to your setup
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center "
      >
        Upload
      </Link>
    </div>
  );
};

export default ShowNotice;
