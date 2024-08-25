import React from "react";
import Logo from "./Images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full py-5 px-12 flex justify-between items-center">
      <NavLink to="/">
        <img className="w-[243.41px] h-8" src={Logo} alt="" />
      </NavLink>
      <ul className="flex items-center font-WorkSans font-semibold text-base text-white gap-7">
        <li>
          <NavLink to="marketplace">Marketplace</NavLink>
        </li>
        <li>
          <NavLink to="rankings">Rankings</NavLink>
        </li>
        <li>
          <NavLink to="wallet">Connect a wallet</NavLink>
        </li>
        <li>
          <NavLink to="signup">
            <button className="py-[19px] px-[30px] bg-[#A259FF] rounded-[20px]">
              <i className="fa-regular fa-user w-5 mr-3"></i>Sign Up
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
