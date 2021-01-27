import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <Link to="/">
          <FaCocktail size={56} color="#000" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
