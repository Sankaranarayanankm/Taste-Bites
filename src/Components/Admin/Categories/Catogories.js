import React, { useState } from "react";
import "./Catogories.css";

const categories = [
  "Desserts",
  "Breakfast",
  "Dinner",
  "Vegetarian",
  "Seafood",
  "Street Food",
];

const Catogories = () => {
  const [category, setCategory] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(category);
    categories.push(category);
  };
  // console.log(categories);
  return (
    <div className="catogories">
      <div className="catogories__available">
        <h2>Currently available Categories</h2>
        <ul>
          {categories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={submitHandler} className="catogories__add">
        <h2>Add New Category </h2>
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Add new Category here"
        />
        <button>Add Category</button>
      </form>
    </div>
  );
};

export default Catogories;
