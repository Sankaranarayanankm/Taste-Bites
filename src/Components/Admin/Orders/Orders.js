import React, { useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [select, setSelect] = useState("pending");
  const changeHandler = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Address</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test@gmail.com</td>
            <td>randomaddress here </td>
            <td>random item</td>
            <td>3</td>
            <td>35</td>
            <td>
              <select value={select} onChange={changeHandler}>
                <option>pending</option>
                <option>preparing</option>
                <option>delivered</option>
              </select>
            </td>
            <td>
              <button>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
