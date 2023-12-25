import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 shadow-lg w-48 bg-white">
      <ul className="list-none p-0 m-0">
        <li className="mb-2">
          <Link to="/" className="text-gray-800 hover:text-black font-medium">
            Home
          </Link>
        </li>
        <li className="text-gray-600 hover:text-black">Shorts</li>
        <li className="text-gray-600 hover:text-black">Videos</li>
        <li className="text-gray-600 hover:text-black">Live</li>
      </ul>

      <div className="border-t border-gray-300 my-3"></div>

      <div>
        <h1 className="font-bold text-gray-800">Subscriptions</h1>
        <ul className="list-none p-0 m-0">
          <li className="text-gray-600 hover:text-black">Music</li>
          <li className="text-gray-600 hover:text-black">Sports</li>
          <li className="text-gray-600 hover:text-black">Gaming</li>
          <li className="text-gray-600 hover:text-black">Movies</li>
        </ul>
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      <div>
        <h1 className="font-bold text-gray-800">Watch Later</h1>
        <ul className="list-none p-0 m-0">
          <li className="text-gray-600 hover:text-black">Music</li>
          <li className="text-gray-600 hover:text-black">Sports</li>
          <li className="text-gray-600 hover:text-black">Gaming</li>
          <li className="text-gray-600 hover:text-black">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
