import React, { useEffect, useState } from "react";
import menuIcon from "../static/assets/images/hamburger.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setSearchSuggestions([]);
        return;
      }

      if (searchCache[searchTerm]) {
        setSearchSuggestions(searchCache[searchTerm]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchTerm);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(cacheResults({ [searchTerm]: json[1] }));
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg w-full">
      {/* Left section */}
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          alt="menu"
          src={menuIcon}
          className="h-6 cursor-pointer"
        />
        <a href="/">
          <img
            className="h-6 mx-4"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
          />
        </a>
      </div>

      {/* Center section */}
      <div className="col-span-10 px-10 relative">
        <div className="flex">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
          <button className="border border-gray-400 bg-gray-100 px-5 py-2 rounded-r-full">
            🔍
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-4 w-1/2 border border-gray-100 shadow-lg rounded-lg z-10">
            <ul>
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="col-span-1 flex justify-end">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
