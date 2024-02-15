import React, { useEffect, useState } from "react";
import { menuToggle } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import Search from "./Search";

const Head = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const storedCached = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (storedCached[searchQuery]) {
      setSuggestions(storedCached[searchQuery]);
    } else {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

      dispatch(
        cachedResults({
          [searchQuery]: [json[1]],
        })
      );
    }
  };

  const handleMenuToggle = () => {
    dispatch(menuToggle());
  };

  const handleSearchSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/search?search_query=${suggestion}`);
  };

  return (
    <div className=" p-2 shadow-lg sticky top-0 bg-white z-20 w-full flex justify-around md:grid grid-flow-col">
      {/* Hamburger and Logo */}
      <div className="flex items-center md:flex col-span-1">
        <img
          onClick={() => handleMenuToggle()}
          className="h-8 mt-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <Link to={"/"}>
          <img
            className="h-16 mt-5"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <Search
        setSearchQuery={setSearchQuery}
        setShowSuggestions={setShowSuggestions}
        showSuggestions={showSuggestions}
        suggestions={suggestions}
        handleSearchSuggestionClick={handleSearchSuggestionClick}
        searchQuery={searchQuery}
      />
      <div className="hidden sm:flex sm:justify-end">
        <img
          className="h-10 rounded-full mt-9"
          src="https://yt3.ggpht.com/qbcWmasNZ6WqDu-1Q7VtzulNUj3m4TRqT108ZULjh0HWYPTSghsyrbAFRiC30p1GHbybjtA=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
