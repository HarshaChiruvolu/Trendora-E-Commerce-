import React from "react";
import { useShopStore } from "../store/shop.store";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
const LatestCollection = () => {
  const { products } = useShopStore();
  const [latestProducts, setlatestProducts] = useState([]);

  useEffect(() => {
    setlatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      {/* Title section for Latest Collection */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, modi
          possimus, numquam officiis blanditiis rem iste, voluptates ipsum
          excepturi perspiciatis aperiam nam laborum rerum nihil deleniti quis
          pariatur commodi. Animi?
        </p>
      </div>

      {/* Grid to display latest products */}
      {/* Each product is displayed using the ProductItem component */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
