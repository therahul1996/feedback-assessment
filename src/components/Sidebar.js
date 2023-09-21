import React from "react";
import user from "./images/user.jpeg";
import grid from "./images/grid.png";
import list from "./images/list.png";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user-card">
          <div>
            <img src={user} alt="user" className="user-img" />
          </div>
          <div className="user-txt-sec">
            <h2>Hello Reader,</h2>
            <p>Here's your news</p>
          </div>
        </div>
        <div className="toggle-btn-card">
          <h1>View toggle</h1>
          <div className="btn-group">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <img src={grid} alt="grid" />
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <img src={list} alt="list" />
            </NavLink>
          </div>
        </div>
        <div className="create-feedback-card">
          <h2>Have a Feedback?</h2>
          <Link to="/add" className="open-btn">We're Listening!</Link>
        </div>
      </div>
   
    </div>
  );
};

export default Sidebar;
