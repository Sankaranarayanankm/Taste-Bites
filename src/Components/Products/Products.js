import React from "react";
import "./Products.css";
import foodItems from "../../dummyFood";
import ProductItem from "../ProductItems/ProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const selected = useSelector((state) => state.sidebar.selectedCategory);
  let renderFoodItems;
  if (selected == "All") {
    renderFoodItems = foodItems;
  } else {
    renderFoodItems = foodItems.filter((item) => item.category == selected);
  }

  return (
    <div className="products">
      <ul>
        {renderFoodItems.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
