import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from '../StateProvider/StateProvider'
function Header() {
const [{basket}]= useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="navbar__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Abdul Mutlib</span>
            <span className="header__optionlinetwo">Sign in</span>
          </div>
        </Link>
        <Link to="" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Return</span>
            <span className="header__optionlinetwo">Order</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Yours</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkOut" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionlinetwo header__basketCount" >{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
