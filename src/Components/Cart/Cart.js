import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";
import Modal from "../../Modal/Modal";
import { useHistory } from "react-router-dom";

/* show ordered items in the cart with status
add total amount for both cart items and ordred items
*/

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderedItems = useSelector((state) => state.cart.orderedItems);
  // console.log(orderedItems);
  const totalCartAmount = cartItems.reduce((cur, item) => {
    return cur + item.quantity * item.price;
  }, 0);
  console.log(totalCartAmount);
  const totalOrderedAmount = orderedItems.reduce((cur, item) => {
    return cur + item.quantity * item.price;
  }, 0);

  // place order handler
  const placeOrderHandler = () => {
    console.log("Order placed");
    history.push("/home/checkout");
  };

  return (
    <Modal>
      <div className="cart">
        <div className="cart__orderedItems">
          <h2>Ordered Items</h2>
          <div className="cart__items">
            {orderedItems.length === 0 ? (
              <p>No ordered items</p>
            ) : (
              orderedItems.map((item) => (
                <div className="cart__item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart__details">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Status: {item.status}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <p className="cart__totalAmount">
            Total Amount {totalOrderedAmount} :
          </p>
        </div>
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
        <p className="cart__totalAmount">Total Amount {totalCartAmount} :</p>
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
