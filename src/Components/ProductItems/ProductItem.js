import React from "react";
import "./ProductItem.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/actions/cart-actions";
import { Toaster } from "react-hot-toast";

const ProductItem = (props) => {
  const history = useHistory();
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const showMore = () => {
    history.push(`/home/${props.id}`);
  };
  const addToCart = (event) => {
    event.stopPropagation();
    dispatch(addItemToCart(email, { ...props }));
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div onClick={showMore} className="productitem">
        <img
          src={props.image}
          alt={props.name}
          className="productitem__image"
        />
        <h4 className="productitem__name">{props.name}</h4>
        <p className="productitem__price">{props.price}</p>
        <button onClick={addToCart} className="productitem__button">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductItem;
