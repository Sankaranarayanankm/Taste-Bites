import React from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../store/slices/sidebar-slice";
import { useHistory } from "react-router-dom";

const Sidebar = ({ admin, category, Icon, path }) => {
  // console.log(path, admin);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    if (admin) {
      history.push(`/admin${path}`);
    } else dispatch(sidebarActions.changeSelection(category));
  };
  return (
    <div onClick={handleClick} className="sidebar">
      <Icon />
      <p>{category}</p>
    </div>
  );
};

export default Sidebar;
