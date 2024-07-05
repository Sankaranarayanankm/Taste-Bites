import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"
        alt="taste-bites logo"
      />
      <div className="header__input">
        <input type="text" placeholder="Search..." />
        <Search />
        
      </div>
      <IconButton>
        <Avatar />
      </IconButton>
    </div>
  );
};

export default Header;
