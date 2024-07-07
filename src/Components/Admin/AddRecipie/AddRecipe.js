import React, { useEffect, useState } from "react";
import "./AddRecipe.css";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../../store/actions/admin-recipe-actions";
import { adminAction } from "../../../store/slices/admin-slice";
import RecipeList from "../RecipeList/RecipeList";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const showList = useSelector((state) => state.admin.showList);
  const [state, setState] = useState({
    name: "",
    categories: "",
    ingredients: "",
    price: "",
    image: "",
  });
  const categories = useSelector((state) => state.admin.categories);
  const editedItem = useSelector((state) => state.admin.edittedRecipe);
  // console.log(editedItem);
  useEffect(() => {
    if (editedItem) {
      setState({
        name: editedItem.name,
        ingredients: editedItem.ingredients,
        categories: editedItem.categories,
        price: editedItem.price,
        image: editedItem.image,
      });
    }
  }, [editedItem]);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addRecipe(state));
    setState({
      name: "",
      categories: "",
      ingredients: "",
      price: "",
      image: "",
    });
  };
  return (
    <>
      {showList && <RecipeList />}
      <div className="addrecipe">
        <button
          className="recipielist"
          onClick={() => dispatch(adminAction.showRecipeList())}
        >
          Available Recipies
        </button>
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
          <select
            value={state.categories}
            name="categories"
            onChange={changeHandler}
          >
            <option>Select Category</option>
            {categories.map((item) => (
              <option>{item.category}</option>
            ))}
          </select>

          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            value={state.ingredients}
            onChange={changeHandler}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={state.price}
            onChange={changeHandler}
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={state.image}
            onChange={changeHandler}
          />

          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
