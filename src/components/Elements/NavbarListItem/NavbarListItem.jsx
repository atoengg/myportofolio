import React from "react";

const NavbarListItem = ({ iconNavItem }) => {
  return (
    <div>
      <li>
        <a className="text-[1.25rem] flex rounded-2xl px-3 active-link">
          {iconNavItem}
        </a>
      </li>
    </div>
  );
};

export default NavbarListItem;
