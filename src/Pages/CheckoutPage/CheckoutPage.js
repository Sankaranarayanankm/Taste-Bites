import React, { useState } from "react";
import "./CheckoutPage.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";
import { placeOrder } from "../../store/actions/cart-actions";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const history = useHistory();
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // in the cart page now show the ordred Items wtih status
    let orderedItems = [];
    for (let val of cartItems) {
      orderedItems.push({ ...val, address, email, status: "pending" });
    }
    for (let val of orderedItems) {
      dispatch(placeOrder(email, val));
    }
    history.push("/home");
    toast.success("Successfully Placed Order");
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
    </>
  );
};

export default CheckoutPage;
