import React from "react";
import { useShopStore } from "../store/shop.store";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  // This component will display individual product details
  // You can use the id, image, name, and price props to render the product
  const currency = useShopStore((state) => state.currency);
  return (
    <Link className=" text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
