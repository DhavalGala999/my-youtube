import React from "react";
import { AiOutlineLike, AiTwotoneDislike } from "react-icons/ai";
import { IoIosShareAlt, IoMdDownload } from "react-icons/io";
import { transformNumberFormat } from "../utils/helper";
const VideoDetails = ({ videoData }) => {
  const {
    snippet: { title, thumbnails, channelTitle },
    statistics,
  } = videoData;
  return (
    <div>
      <h3 className="font-bold text-lg mt-4 mb-3">{title}</h3>

      <div className="flex-col items-center">
        <img
          src={thumbnails.default.url}
          alt="channel icon"
          className="h-12 w-12 object-cover rounded-full inline-block"
        />
        <span className="text-md font-bold text-gray-700 text-base ml-2">
          {channelTitle}
        </span>
        <button className="ml-4 px-2 py-1 border border-black rounded-2xl bg-black text-white">
          Subscribe
        </button>
        <div className=" mt-6 sm:inline-block ">
          <div className="flex justify-center items-center h-9 bg-gray-100 font-semibold text-black rounded-full px-4 py-0">
            <button className="h-5 w-5 mr-2">
              <AiOutlineLike />
            </button>
            <span className="mr-2">
              {statistics?.likeCount
                ? transformNumberFormat(statistics?.likeCount)
                : ""}
            </span>
            <span className="mr-2">|</span>
            <button className="h-5 w-5 mt-1">
              <AiTwotoneDislike />
            </button>
            <button className="h-5 w-7  flex ml-14 items-center">
              <IoIosShareAlt /> <p className="w-2 text-sm">Share</p>
            </button>
            <button className="h-5 w-7 flex items-center ml-14">
              <IoMdDownload />
              <p className="w-2 text-sm">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
