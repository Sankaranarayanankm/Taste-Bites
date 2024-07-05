import React, { useState } from "react";
import "./CheckoutPage.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      email,
      address,
      items: cartItems,
      status: "pending",
    };
    console.log(obj);
    dispatch(cartActions.placeOrder(obj));
  };
  return (
    <div className="checkout">
      <div className="checkout__reviewCart">
        <h1>Your Cart</h1>
        {cartItems.map((item) => (
          <div className="cart__item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart__details">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <p> ONLY CASH DELIVARY IS AVAILABLE</p>
      <form className="checkout__form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Address..."
          value={address}
          onChange={addressHandler}
        />
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
