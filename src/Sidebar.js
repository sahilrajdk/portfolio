import React from "react";
import { NavLink } from "react-router-dom";
import resume from "./resume/resume.pdf";

const sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar__list">
      <NavLink exact={true} to="/">
        About Me
      </NavLink>
      <NavLink exact={true} to="/portfolio">
        Portfolio
      </NavLink>
      <a href={resume}>Resume</a>
    </ul>
  </div>
);

export default sidebar;
