import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams, useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";
import VideoDetails from "./VideoDetails";
import useGetVideos from "../utils/useGetVideos";
import VideoCard from "./VideoCard";
import { recommendVideoCard } from "./VideoCard";

const Watch = () => {
  const location = useLocation();
  const { data } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  const [searchParams] = useSearchParams();
  let videoId = searchParams.get("v");

  const recommendVideos = useGetVideos();
  const RecVideo = recommendVideoCard(VideoCard);
  return (
    <div className="m-4 p-2">
      <div className="flex">
        <div className="md:ml-12 xl:w-[800px]">
          <iframe
            className="rounded-xl w-[350px] h-[200px] sm:max-md:w-[550px] sm:max-md:h-[300px] md:h-[250px] md:w-[400px] lg:w-[650px] lg:h-[400px] xl:w-[800px]"
            src={`https://www.youtube.com/embed/${videoId}?si=PnCKbV_fZBSWAsJ_`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="w-80 sm:max-md:w-[550px] md:w-[400px] lg:w-[650px] ">
            <VideoDetails videoData={data} />
            <CommentsContainer />
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 0.5xl:ml-16">
          <Livechat />
          <div className="w-96 mt-10 ml-5 md:ml-0 md:w-auto">
            {recommendVideos.map((v) => (
              <RecVideo info={v} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
