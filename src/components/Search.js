import React from "react";
import { Link } from "react-router-dom";
const Search = (props) => {
  const {
    handleSearchSuggestionClick,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    setSearchQuery,
    searchQuery,
  } = props;
  return (
    <div className="md:col-span-10">
      <div className="flex mt-9">
        <input
          type="text"
          className="border border-gray-500 w-32 ml-4 rounded-l-full p-2 md:w-72 md:px-4 lg:w-96"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowSuggestions(false);
            }, 200)
          }
        />
        <div>
          <Link to={`/search?search_query=${searchQuery}`}>
            <img
              className="h-[39px] py-2 px-5 border rounded-e-full hover:bg-gray-200 shadow-lg bg-gray-100 dark:bg-zinc-700 object-center"
              src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
              alt="search"
            />
          </Link>
        </div>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="w-60 fixed bg-white rounded-lg shadow-lg md:w-72 md:ml-5 lg:w-96">
          <ul>
            {suggestions.map((s, i) => (
              <li
                key={i}
                className="text-start px-2 hover:bg-gray-200"
                onClick={() => handleSearchSuggestionClick(s)}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
