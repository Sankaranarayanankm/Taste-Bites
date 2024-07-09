import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/actions/cart-actions";
import { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.admin.recipes);
  const params = useParams();
  const email = useSelector((state) => state.auth.email);

  const { productId } = params;
  const food = recipes.find((item) => item.id === productId);
  const addToCart = () => {
    dispatch(addItemToCart(email, food));
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
        <button onClick={addToCart} className="productDetails__addtocart">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
