import React, { useState } from "react";
import { navList } from "../../services/ContentList";
import { Link } from "react-router-dom";
import { truncate } from "../../services/Helper";
import { NavProps } from "../../services/Interface";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

export const Navbar: React.FC<NavProps> = ({ account, actionClick }) => {
  const [toggle, setToggle] = useState(false);
  const [clicked, setClicked] = useState("Home");

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex-1 flex-start">
        <h1 className="font-bold cursor-pointer text-2xl text-green-400">
          Crowdfy
        </h1>
      </div>

      <ul className="list-none hidden justify-center items-center flex-1 lg:flex">
        {navList.map((nav, index) => (
          <li
            key={nav.link}
            className={`cursor-pointer ${
              clicked === nav.title
                ? "font-semibold underline-green"
                : "font-medium"
            } ${index === navList.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setClicked(nav.title)}
          >
            <Link to={`${nav.link}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="lg:flex hidden flex-1 flex justify-end">
        {account ? (
          <button
            onClick={actionClick}
            type="button"
            className="hover:scale-105 duration-200 text-white px-6 py-3.5 font-normal text-[16px] shadow-md rounded-full bg-green-400"
          >
            {truncate(account, 4, 4, 11)}
          </button>
        ) : (
          <button
            onClick={actionClick}
            type="button"
            className="hover:scale-105 duration-200 text-white px-6 py-3.5 font-normal text-[16px] shadow-md rounded-full bg-green-400"
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black popup-visible absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navList.map((nav) => (
              <li
                key={nav.link}
                className={`font-medium mb-4 cursor-pointer text-[16px] ${
                  clicked === nav.title ? "text-green-500" : "text-white"
                }`}
                onClick={() => setClicked(nav.title)}
              >
                <Link to={`${nav.link}`}>{nav.title}</Link>
              </li>
            ))}
            {account ? (
              <li
                className={`font-medium mb-0 cursor-pointer text-[16px] ${
                  clicked === "Signout" ? "text-green-500" : "text-white"
                }`}
                onClick={actionClick}
              >
                Sign Out
              </li>
            ) : (
              <li
                className={` font-medium mb-0 cursor-pointer text-[16px] ${
                  clicked === "Signout" ? "text-green-500" : "text-white"
                }`}
                onClick={actionClick}
              >
                Connect Wallet
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
