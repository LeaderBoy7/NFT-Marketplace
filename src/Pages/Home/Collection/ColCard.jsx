import React from "react";
import { NavLink } from "react-router-dom";

const ColCard = (props) => {
  return (
    <div className="w-[330px] flex flex-col gap-4">
      <NavLink to="">
        <img className="w-full rounded-[20px]" src={props.bigimg} alt="" />
      </NavLink>
      <div className="w-full flex gap-[15px]">
        <NavLink to="">
          <img
            className="w-[100px] rounded-[20px]"
            src={props.smallimg1}
            alt=""
          />
        </NavLink>
        <NavLink to="">
          <img
            className="w-[100px] rounded-[20px]"
            src={props.smallimg2}
            alt=""
          />
        </NavLink>
        <NavLink to="">
          <div className="w-[100px] h-[100px] rounded-[20px] font-SpaceMono font-bold text-2xl text-center leading-[100px] bg-[#A259FF] text-white">
            1025+
          </div>
        </NavLink>
      </div>
      <h1 className="font-WorkSans font-semibold text-[22px] text-white">
        {props.title}
      </h1>
      <ul className="flex gap-3">
        <li>
          <NavLink to="">
            <img className="w-[24px] rounded-full" src={props.avatar} alt="" />
          </NavLink>
        </li>
        <li>
          <h1 className="font-WorkSans font-normal text-base text-white">
            {props.name}
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default ColCard;
