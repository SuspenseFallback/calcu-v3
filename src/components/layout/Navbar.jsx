import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p className="logo">Calcu</p>
        <div className="nav-items">
            <p className="nav-link">
                <NavLink to="/">Home</NavLink>
            </p>
            <p className="nav-link">
                <NavLink to="/practice">Practice</NavLink>
            </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
