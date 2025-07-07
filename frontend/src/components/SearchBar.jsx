import React from "react";
import { useShopStore } from "../store/shop.store";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = () => {
  const showSearch = useShopStore((state) => state.showSearch);
  const setShowSearch = useShopStore((state) => state.setShowSearch);
  const search = useShopStore((state) => state.search);
  const setSearch = useShopStore((state) => state.setSearch);
  // This component is the SearchBar for the E-commerce website.

  const [visible, setvisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div>
      <div className="border-t border-b bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-inherit text-sm "
            type="text"
            placeholder="Search"
          />
          <img className="w-4" src={assets.search_icon} alt="" />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
