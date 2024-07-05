import React from "react";
import "./Products.css";
import foodItems from "../../dummyFood";
import ProductItem from "../ProductItems/ProductItem";

const Products = () => {
  return (
    <div className="products">
      <ul>
        {foodItems.map((item) => (
          // <li key={item.id}>{item.name}</li>
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
