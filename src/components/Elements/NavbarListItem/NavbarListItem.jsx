import React from "react";
import { NavLink } from "react-router-dom";

const NavbarListItem = ({ iconNavItem, location, title, activeClassName }) => {
  return (
    <li className={`nav-item`}>
      <NavLink to={location} className="nav__link">
        <div className="text-[1.25rem] flex flex-col p-1 gap-1 items-center active-link lg:px-3 hover:bg-base-300 hover:rounded-full hover:transition-all hover:duration-200">
          {iconNavItem}
          <span className="text-xs font-medium">{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default NavbarListItem;
