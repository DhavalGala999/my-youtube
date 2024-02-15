import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";

const useGetVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json();
    setVideos(json.items);
  };
  return videos;
};

export default useGetVideos;
