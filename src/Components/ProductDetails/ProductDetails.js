import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import foodItems from "../../dummyFood";

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;
  const food = foodItems.find((item) => item.id == productId);
  console.log(food);
  return (
    <div className="productDetails">
      <div className="productDetails__header">
        <img src={food.image} alt={food.name} />
        <h3>{food.name}</h3>
        <p>Price: {food.price}</p>
      </div>
      <div className="productDetails__ingredients">
        <h4>Ingredients</h4>
        <p>{food.ingredients}</p>
      </div>
      <div className="productDetails__preparation">
        <h4>Preparation</h4>
        <p>{food.preparationInstructions}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
