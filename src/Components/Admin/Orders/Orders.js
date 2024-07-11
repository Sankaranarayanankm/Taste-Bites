import React, { startTransition, useState } from "react";
import "./Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../../../store/actions/cart-actions";
import { Toaster } from "react-hot-toast";

const Orders = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({});
  const totalOrderedItems = useSelector((state) => state.cart.orderedItems);
  const getBackground = (status) => {
    if (status === "pending") {
      return "#CCCCCC"; // Light grey
    } else if (status === "preparing") {
      return "#F1C40F"; // Yellow
    } else if (status === "delivered") {
      return "#27AE60"; // Green
    } else {
      return ""; // Default or fallback background color
    }
  };

  const changeHandler = (event, id) => {
    const updatedStatus = event.target.value;
    setStatus((prev) => {
      return {
        ...prev,
        [id]: updatedStatus,
      };
    });
  };
  console.log(status);
  const editHandler = (event, id) => {
    event.preventDefault();
    let updatedItem = totalOrderedItems.find((item) => item.id == id);
    updatedItem = { ...updatedItem, status: status[id] };
    dispatch(updateOrders(id, updatedItem));
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="orders">
        <form>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Address</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {totalOrderedItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <select
                      className="orders__select"
                      style={{
                        backgroundColor: getBackground(status[item.id] || item.status),
                      }}
                      value={status[item.id] || item.status}
                      name="select"
                      onChange={(event) => changeHandler(event, item.id)}
                    >
                      <option value="pending">Pending</option>
                      <option value="preparing">Preparing</option>

                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="orders__button"
                      onClick={(event) => editHandler(event, item.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Orders;
