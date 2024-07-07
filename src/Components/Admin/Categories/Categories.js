import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  getData,
} from "../../../store/actions/admin-actions";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.admin.categories) || [];
  // console.log(categories);
  const loading = useSelector((state) => state.admin.isLoading);
  const [category, setCategory] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      category,
    };
    dispatch(addCategory(obj));
    setCategory("");
  };

  const editHandler = (id) => {
    const item = categories.find((itm) => itm.id === id);
    setCategory(item.category);
    dispatch(deleteCategory(id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="categories">
      <div className="categories__available">
        <h2>Currently available Categories</h2>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              {item.category}
              <div>
                <Edit onClick={() => editHandler(item.id)} />
                <Delete onClick={() => deleteHandler(item.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={submitHandler} className="categories__add">
        <h2>Add New Category</h2>
        <label htmlFor="category">Name:</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Add new Category here"
        />
        <button type="submit">{loading ? "Adding..." : "Add Category"} </button>
      </form>
    </div>
  );
};

export default Categories;
