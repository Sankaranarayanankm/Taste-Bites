import React from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../store/slices/sidebar-slice";
import { useHistory } from "react-router-dom";

const Sidebar = ({ admin, category, path }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    if (admin) {
      history.push(`/admin${path}`);
    } else dispatch(sidebarActions.changeSelection(category));
  };
  return (
    <div onClick={handleClick} className="sidebar">
      <h5>{category}</h5>
    </div>
  );
};

export default Sidebar;
   