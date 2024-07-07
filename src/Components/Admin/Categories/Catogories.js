import React, { useEffect, useState } from "react";
import "./Catogories.css";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addCatogory,
  deleteCatogory,
  getData,
} from "../../../store/actions/admin-actions";

const Catogories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.admin.catogories) || [];
  const loading = useSelector((state) => state.admin.isLoading);
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      category,
    };
    dispatch(addCatogory(obj));
    setCategory("");
  };

  const editHandler = (id) => {
    const item = categories.find((itm) => itm.id === id);
    setCategory(item.category);
    dispatch(deleteCatogory(id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteCatogory(id));
  };

  return (
    <div className="catogories">
      <div className="catogories__available">
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
      <form onSubmit={submitHandler} className="catogories__add">
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

export default Catogories;
