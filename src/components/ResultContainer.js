import React from "react";
import { Link } from "react-router-dom";
const ResultContainer = ({ data }) => {
  const {
    snippet: { thumbnails, title, channelTitle, description },
    id,
  } = data;

  console.log("ResC", data);

  return (
    <Link to={`/watch?v=${id.videoId}`} state={{ data: data }}>
      <div className="flex md:ml-[10%] w-[100%] scroll-smooth m mt-4 justify-around my-2 p-2 rounded-lg shadow-xl sm:h-52">
        <img
          className="w-56 md:w-96 object-cover object-center rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail img"
        />
        <div className="w-12 mx-4 sm:w-full flex flex-col">
          <p className="text-sm font-bold mb-2 pt-3 ">{title}</p>
          <p className="text-sm font-bold mb-2 pt-2 text-gray-600">
            {channelTitle}
          </p>

          <p className="text-sm hidden sm:block">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResultContainer;
