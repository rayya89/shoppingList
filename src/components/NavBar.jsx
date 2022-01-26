import React from "react";
//import '../App.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img className="logo" alt="EIKA" src="/images/logo.png" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
