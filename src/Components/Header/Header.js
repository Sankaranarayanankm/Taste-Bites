import React, { useState } from "react";
import "./Header.css";
import { Avatar, Button, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { cartActions } from "../../store/slices/cart-slice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

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
        <Button onClick={() => dispatch(cartActions.showCart())}>Cart</Button>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </>
  );
};

export default Header;
