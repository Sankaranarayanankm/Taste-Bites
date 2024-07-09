import React from "react";
import "./Products.css";
import foodItems from "../../dummyFood";
import ProductItem from "../ProductItems/ProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const selected = useSelector((state) => state.sidebar.selectedCategory);
  const recipes = useSelector((state) => state.admin.recipes);
  // console.log(recipes[0]);

  let renderFoodItems;
  if (selected == "All") {
    renderFoodItems = recipes;
  } else {
    renderFoodItems = recipes.filter((item) => item.categories == selected);
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
