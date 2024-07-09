import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";
import Modal from "../../Modal/Modal";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalOrderedItems = useSelector((state) => state.cart.orderedItems);
  const email = useSelector((state) => state.auth.email);

  const orderedItems = totalOrderedItems.filter((item) => item.email === email);

  const totalCartAmount = cartItems.reduce((cur, item) => {
    return cur + item.quantity * item.price;
  }, 0);

  const totalOrderedAmount = orderedItems.reduce((cur, item) => {
    return cur + item.quantity * item.price;
  }, 0);

  const placeOrderHandler = () => {
    history.push("/home/checkout");
    dispatch(cartActions.hideCart());
  };

  const addQuantityHandler = (id) => {
    dispatch(cartActions.addToCart({ id }));
  };

  const removeQuantityHandler = (id) => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  return (
    <Modal>
      <div className="cart">
        <div className="cart__orderedItems">
          <h2>Ordered Items</h2>
          <p className="cart__totalAmount">
            Total Amount for Ordered Items: {totalOrderedAmount}
          </p>
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
                  <div className="cart__quantity">
                    <button onClick={() => removeQuantityHandler(item.id)}>
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => addQuantityHandler(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <p className="cart__totalAmount">
          Total Amount for Cart Items: {totalCartAmount}
        </p>
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
