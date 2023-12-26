import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggetions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSearchSuggestions(data[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center p-2 m-2 shadow-lg">
      <div className="flex items-center cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 w-13"
          alt="hamburger-icon"
          src="https://miro.medium.com/v2/resize:fit:600/1*rddekGCO3PjhXqtePcIYIQ.png"
        />
        <img
          className="h-12 mx-2"
          alt="youtube-logo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>

      <div>
        <div className="col-span-10 text-center">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && ( 
          <div className="fixed bg-white w-1/2 py-3 px-4 rounded-lg shadow-lg border border-gray-200">
            <ul>
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 shadow-sm hover:bg-gray-100"
                >
                  🔍{suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <img
          className="h-12 w-12 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Head;
