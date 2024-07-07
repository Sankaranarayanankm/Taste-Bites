import React, { useState } from "react";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [state, setState] = useState({
    name: "",
    categories: "",
    incrediants: "",
    price: "",
    image: "",
  });

  const changeHandler = (event) => {
    const { name, value, files } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value || files[0],
      };
    });
  };
  // console.log(image)
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div className="addrecipe">
      <form onSubmit={submitHandler} className="addrecipe__form">
        <h1>Add New Recipe</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={changeHandler}
        />
        <label htmlFor="categories">Select Categories</label>
        <option>Cat 1</option>
        <select
          value={state.categories}
          name="categories"
          onChange={changeHandler}
        >
          <option>Cat 1</option>
          <option>Cat 2</option>
          <option>Cat 3</option>
          <option>Cat 4</option>
        </select>

        <label htmlFor="incrediants">Incrediants:</label>
        <input
          type="text"
          name="incrediants"
          value={state.incrediants}
          onChange={changeHandler}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={state.price}
          onChange={changeHandler}
        />
        {/* need a input field to add images */}
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          name="image"
          value={state.image}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddRecipe;
