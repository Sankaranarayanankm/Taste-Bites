import React from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../store/slices/sidebar-slice";

const Sidebar = ({ category, Icon }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(sidebarActions.changeSelection(category))}
      className="sidebar"
    >
      <Icon />
      <p>{category}</p>
    </div>
  );
};

export default Sidebar;
