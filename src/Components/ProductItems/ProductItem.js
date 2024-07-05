import React from "react";
import "./ProductItem.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";

const ProductItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showMore = () => {
    history.push(`/home/${props.id}`);
  };
  const addItemToCart = (event) => {
    event.stopPropagation();
    dispatch(cartActions.addToCart({ ...props }));
  };
  return (
    <div onClick={showMore} className="productitem">
      <img src={props.image} alt={props.name} className="productitem__image" />
      <h4 className="productitem__name">{props.name}</h4>
      <p className="productitem__price">{props.price}</p>
      <button onClick={addItemToCart} className="productitem__button">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
