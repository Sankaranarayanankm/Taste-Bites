import React from "react";
import "./ProductItem.css";
import { useHistory } from "react-router-dom";

const ProductItem = (props) => {
  const history = useHistory();
  const showMore = () => {
    history.push(`/home/${props.id}`);
  };
  return (
    <div onClick={showMore} className="productitem">
      <img src={props.image} alt={props.name} className="productitem__image" />
      <h4 className="productitem__name">{props.name}</h4>
      <p className="productitem__price">{props.price}</p>
      <button className="productitem__button">Add To Cart</button>
    </div>
  );
};

export default ProductItem;
