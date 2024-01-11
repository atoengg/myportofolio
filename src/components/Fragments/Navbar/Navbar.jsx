import React from "react";
import {
  BsHouse,
  BsPerson,
  BsJournal,
  BsCast,
  BsPersonLinesFill,
  BsMoonFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const nav_item = [
    {
      title: "Home",
      icon: <BsHouse />,
      loction: "/",
    },
    {
      title: "About",
      icon: <BsPerson />,
      loction: "/aboutme",
    },
    {
      title: "Certificate",
      icon: <BsJournal />,
      loction: "/certificate",
    },
    {
      title: "Project",
      icon: <BsCast />,
      loction: "/project",
    },
    {
      title: "Contact",
      icon: <BsPersonLinesFill />,
      loction: "/contact",
    },
  ];

  return (
    <>
      <header className="px-4 fixed top-0 left-0 bg-white shadow-sm w-full z-10 transition duration-300">
        <nav className="container mx-auto flex h-[3.5rem] justify-between items-center">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">{"{ atoengg }"}</a>
          </div>
          <div className="fixed bottom-[1rem] w-90% rounded-full py-[0.25rem] px-[1.5rem] drop-shadow-sm transition duration-300 navbar-fixed md:w-[500px] left-0 right-0 mx-auto lg:py-[1rem] lg:px-[2.25rem]">
            <ul className="px-1 flex justify-between items-center">
              {nav_item?.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.loction}
                    activeClassName="active"
                    className={"text-[#9ca3af] hover:text-[#030712]"}
                  >
                    <div className="text-[1.25rem] flex flex-col p-1 gap-1 items-center active-link lg:px-3 hover:bg-base-300 hover:rounded-full hover:transition-all hover:duration-200">
                      {item.icon}
                      <span className="text-xs font-medium">{item.title}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <BsMoonFill className="text-[18px] lg:text-xl fill-current cursor-pointer hover:opacity-50" />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
