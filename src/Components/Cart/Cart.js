import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";
import Modal from "../../Modal/Modal";

const Cart = () => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.items);
  const cartItems = [];
  const placeOrderHandler = () => {
    // Handle placing order
    console.log("Order placed", cartItems);
  };

  return (
    <Modal>
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="cart__items">
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart__item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart__details">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart__actions">
          <button className="cart__orderbutton" onClick={placeOrderHandler}>
            Place Order
          </button>
          <button
            className="cart__cancelbutton"
            onClick={() => dispatch(cartActions.hideCart())}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
