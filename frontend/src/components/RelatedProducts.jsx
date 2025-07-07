import React, { useEffect, useState } from "react";
import { useShopStore } from "../store/shop.store";
import Title from "./Title"; // Assuming you have a Title component for the title
import ProductItem from "./ProductItem"; // Assuming you have a ProductItem component to display each product
const RelatedProducts = ({ category, subCategory }) => {
  // Here you would typically fetch related products based on the category and subcategory
  // For example, you might use a useEffect hook to fetch data from an API or
  // from a global state management store like Redux or Context API.
  const { products } = useShopStore();
  const [related, setrelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory && category === item.category
      );
      setrelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gay-y-5 ">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
