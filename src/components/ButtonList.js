import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const ButtonList = () => {
  let buttonText = [
    "Live",
    "Music",
    "News",
    "Cricket",
    "Bollywood",
    "Hollywood",
    "Sports",
    "Tech",
    "Entertainment",
    "Comedy",
  ];

  return (
    <div className="flex fixed bg-white w-full z-200 mt-0 overflow-x-scroll sm:justify-center lg:overflow-x-visible">
      {buttonText.map((buttonItem) => (
        <Link
          key={buttonItem}
          to={{
            pathname: "/search",
            search: `?search_query=${buttonItem}`.toLowerCase(),
          }}
        >
          <Button buttonInfo={buttonItem} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
