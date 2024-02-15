import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";
import { Link } from "react-router-dom";
import useGetVideos from "../utils/useGetVideos";

const MainContainer = () => {
  const videos = useGetVideos();

  return (
    <div className="col-span-11">
      <ButtonList />
      <div className="flex flex-wrap mt-12 justify-center">
        {videos &&
          videos.map((video) => (
            <Link
              key={video.id}
              to={{
                pathname: "/watch",
                search: `?v=${video.id}`,
              }}
              state={{ data: video }}
            >
              {/* {console.log("video", video)} */}
              <VideoCard info={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MainContainer;
