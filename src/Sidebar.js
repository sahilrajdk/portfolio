import React from "react";
import { NavLink } from "react-router-dom";

const sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar__list">
      <NavLink exact={true} to="/" className="sidebar__list__item">
        About Me
      </NavLink>
      <NavLink exact={true} to="/portfolio" className="sidebar__list__item">
        Portfolio
      </NavLink>
    </ul>
  </div>
);

export default sidebar;
