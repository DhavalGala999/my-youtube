import React from "react";
import { Link } from "react-router-dom";

const SidebarItemList = ({ item }) => {
  const { itemName, imgSrc, searchParam } = item;
  return (
    <div>
      <li className="px-2 py-2">
        <div className="flex">
          <div className="text-2xl ml-1">{imgSrc}</div>
          <p className="pl-1">
            <Link
              to={searchParam ? `/search?search_query=${searchParam}` : `/`}
              className="text-lg"
            >
              {itemName}
            </Link>
          </p>
        </div>
      </li>
      {itemName === "Live" && <hr className="mt-2 border border-gray-300" />}
    </div>
  );
};

export default SidebarItemList;
