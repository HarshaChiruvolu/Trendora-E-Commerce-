import React from "react";
import { assets } from "../assets/assets.js";
import trendora from "../assets/trendora-removebg-preview.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useShopStore } from "../store/shop.store.js";
const Navbar = () => {
  const [Visible, setVisible] = useState(false);
  //we use useShopStore to access the global state
  //dont use useSHopStore() without (state)=> state.cartItems because
  //it will return the entire state object, which is not what we want
  //Subscribes to the entire store (not just products)
  // React will re-render the component anytime any part of the store changes — even if products didn’t.
  const cartItems = useShopStore((state) => state.cartItems);
  const token = useShopStore((state) => state.token);
  const setToken = useShopStore((state) => state.setToken);
  const setCartItems = useShopStore((state) => state.setCartItems);
  const setShowSearch = useShopStore((state) => state.setShowSearch);
  const showSearch = useShopStore((state) => state.showSearch);
  const navigate = useNavigate();

  // Reactively compute the count
  //how reduce works is
  // it takes an accumulator (acc) and the current value (sizes) from the array
  // and returns a single value (the total count of items in the cart).
  // Here, we are using Object.values to get an array of all the sizes in the cartItems
  // and then using reduce to sum up the quantities of each size.
  // The first reduce sums up the quantities of each size for each item in the cart
  // The second reduce sums up the total quantities across all items in the cart
  // The final result is the total count of items in the cart.

  const count = Object.values(cartItems).reduce((acc, sizes) => {
    return acc + Object.values(sizes).reduce((sum, qty) => sum + qty, 0);
  }, 0);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  // This component is the Navbar for the E-commerce website.
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Website logo as a link to home page*/}
      <Link className="flex items-center" to="/">
        <img
          src={trendora}
          className="w-25 object-contain transition  ease-in-out duration-50   hover:scale-110 hover:border-red-300 hover:border-b-2"
          alt=""
        />
      </Link>
      {/* Navigation menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-0.5">
          <p className="variable">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-0.5"
        >
          <p className="variable">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-0.5">
          <p className="variable">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-0.5">
          <p className="variable">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* Search icon */}
        <img
          onClick={() => setShowSearch(!showSearch)}
          // This will set the showSearch state to true when the search icon is clicked
          src={assets.search_icon}
          className="w-5 cursor-pointer variable"
          alt=""
        />
        {/* profile icon */}
        <div className="group relative variable">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          {/* -------Dropdown menu for profile icon--------- */}
          {token && (
            <div className="hidden group-hover:block  absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  LogOut
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Cart icon */}
        {/* Using Link to navigate to the cart page */}
        <Link to="/cart" className="relative variable">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {count}
          </p>
        </Link>

        {/* Hamburger menu icon for mobile view */}
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Mobile navigation menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          Visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-200"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-amber-800"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-amber-800"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-amber-800"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-amber-800"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// This component is the Navbar for the E-commerce website.
// It includes the website logo and a navigation menu.
