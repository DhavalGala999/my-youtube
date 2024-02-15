import React from "react";
import { transformNumberFormat } from "../utils/helper";
const VideoCard = ({ info }) => {
  const {
    snippet: { channelTitle, localized, thumbnails },
    statistics,
  } = info;
  return (
    <div className="shadow-lg w-[370px] m-2 p-2 grid auto-rows-max">
      <img src={thumbnails.medium.url} alt="thumbnail" className="w-full" />
      <div>
        <ul>
          <li className="font-bold">
            {localized.title.length > 70
              ? localized.title.slice(0, 50) + "..."
              : localized.title}
          </li>
          <li>{channelTitle}</li>
          <li>{transformNumberFormat(statistics?.viewCount)} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;

export const recommendVideoCard = (VideoCard) => {
  return (props) => {
    const {
      snippet: { channelTitle, localized, thumbnails },
      statistics,
    } = props.info;
    return (
      <div className="flex h-24 bg-slate-100 mb-4 rounded-lg sm:h-28 sm:w-auto">
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="w-1/4 rounded-lg sm:w-20 lg:w-52"
        />
        <ul>
          <li className="font-bold p-2 text-xs">
            {localized.title.length > 70
              ? localized.title.slice(0, 20) + "..."
              : localized.title}
          </li>
          <li className="px-2 text-xs">{channelTitle}</li>
          <li className="px-2 text-xs">
            {transformNumberFormat(statistics?.viewCount)} views
          </li>
        </ul>
      </div>
    );
  };
};
