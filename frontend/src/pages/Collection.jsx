import React, { useState, useEffect, use } from "react";
import { assets } from "../assets/assets";
import { useShopStore } from "../store/shop.store";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products, search, showSearch } = useShopStore();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value)); //filtering out the category if it already exists
    } else {
      setCategory((prev) => [...prev, e.target.value]); //using spread operator to add new category
    }
  };

  const toggleSubcategory = (e) => {
    // Check if the subcategory is already selected
    if (subCategory.includes(e.target.value)) {
      // If it is, remove it from the list
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      // If it isn't, add it to the list
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice(); // Create a copy of the products array
    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ); // Filter products based on search input
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      ); // Filter products based on selected categories
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      ); // Filter products based on selected subcategories
    }

    setfilterProducts(productsCopy); // Update the filterProducts state with the filtered products
  };

  const sortProduct = () => {
    // Function to sort products based on price or relevance
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setfilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setfilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break; // Default case, no sorting applied
    }
  };

  useEffect(() => {
    applyFilter();
    // Filter products based on selected categories and subcategories
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
    // Sort products based on the selected sort type
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1  sm:gap-10 pt-10 border-t">
      {/* Filter Options  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="toggle"
          />
        </p>
        {/* Categorie Filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Men"
                onClick={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Women"
                onClick={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Kids"
                onClick={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategories  Filters*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onClick={toggleSubcategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bottomwear"
                onClick={toggleSubcategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Winterwear"
                onClick={toggleSubcategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side collection */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort  */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
