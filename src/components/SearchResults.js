import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_RESULTS_URL } from "../utils/constants";
import ResultContainer from "./ResultContainer";
import { closeSidebar } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults(query);
    dispatch(closeSidebar());
  }, [query]);

  const fetchSearchResults = async (query) => {
    const data = await fetch(SEARCH_RESULTS_URL + query);
    const json = await data.json();
    setSearchResults(json.items);
  };
  return (
    <div className="w-[90] ml-16 mt-16 items-center">
      {searchResults &&
        searchResults.map((result) => (
          <ResultContainer key={result.id.videoId} data={result} />
        ))}
    </div>
  );
};

export default SearchResults;
