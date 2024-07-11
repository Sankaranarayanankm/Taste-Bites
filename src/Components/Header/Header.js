import React from "react";
import "./Header.css";
import { Avatar, Button, IconButton } from "@mui/material";
import { Logout, Search } from "@mui/icons-material";
import { cartActions } from "../../store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/auth-slice";
import { logout } from "../../store/actions/auth-actions";
import { useHistory, useRouteMatch } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const path = useRouteMatch();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.admin);
  const udpateUserProfile = () => {
    history.push(`${path.path}/userprofile`);
  };
  console.log(path.url);

  return (
    <>
      <div className="header">
        <img
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"
          alt="taste-bites logo"
        />
        <div className="header__input">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        {!admin && (
          <Button onClick={() => dispatch(cartActions.showCart())}>Cart</Button>
        )}
        <div>
          <IconButton onClick={udpateUserProfile}>
            <Avatar />
          </IconButton>
          <IconButton onClick={() => dispatch(logout())}>
            <Logout />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
