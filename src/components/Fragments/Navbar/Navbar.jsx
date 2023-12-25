import React from "react";
import {
  BsHouse,
  BsPerson,
  BsJournal,
  BsCast,
  BsPersonLinesFill,
  BsMoonFill,
} from "react-icons/bs";
import NavbarListItem from "../../Elements/NavbarListItem/NavbarListItem";

const Navbar = () => {
  return (
    <>
      <header className="px-4 fixed top-0 left-0 bg-white shadow-sm w-full z-10 transition duration-300">
        <nav className="container mx-auto flex h-[3.5rem] justify-between items-center">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">{"{ atoengg }"}</a>
          </div>
          <div className="fixed bottom-[1rem] w-90% rounded-full py-[0.25rem] px-[1.5rem] drop-shadow-sm transition duration-300 navbar-fixed md:w-[328px] left-0 right-0 mx-auto lg:py-[1rem] lg:px-[2.25rem]">
            <ul className="menu menu-horizontal px-1 flex justify-between items-center">
              <NavbarListItem iconNavItem={<BsHouse />} />
              <NavbarListItem iconNavItem={<BsPerson />} />
              <NavbarListItem iconNavItem={<BsJournal />} />
              <NavbarListItem iconNavItem={<BsCast />} />
              <NavbarListItem iconNavItem={<BsPersonLinesFill />} />
            </ul>
          </div>
          <BsMoonFill className="text-[18px] lg:text-xl fill-current cursor-pointer hover:opacity-50" />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
