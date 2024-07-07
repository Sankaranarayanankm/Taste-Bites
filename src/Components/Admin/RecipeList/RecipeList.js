import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeList.css";
import Modal from "../../../Modal/Modal";
import { adminAction } from "../../../store/slices/admin-slice";
import { deleteRecipe } from "../../../store/actions/admin-recipe-actions";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.admin.recipes);

  const editHandler = (id) => {
    const item = recipes.find((itm) => itm.id == id);
    dispatch(adminAction.editRecipe(item));
    dispatch(adminAction.deleteRecipe(id));
    dispatch(adminAction.hideRecipeList());
    console.log(item);
  };
  const deleteHandler = (id) => {
    dispatch(deleteRecipe(id));
  };
  return (
    <Modal>
      <div className="recipelist">
        <h1>Recipe List</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>Categories: {recipe.categories}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Price: ${recipe.price}</p>
              <div className="recipe__actions">
                <button onClick={() => deleteHandler(recipe.id)}>Delete</button>
                <button onClick={() => editHandler(recipe.id)}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch(adminAction.hideRecipeList())}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default RecipeList;
