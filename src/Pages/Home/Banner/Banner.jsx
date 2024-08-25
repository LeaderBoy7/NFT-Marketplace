import React, { useEffect, useState } from "react";
import BannerLogo from "./Images/BannerLogo.gif";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { info } from "autoprefixer";

const Banner = () => {
  const [stat, setStat] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/stat").then((res) => {
      setStat(res.data);
    });
  }, []);
  return (
    <div className="w-full flex justify-center py-20">
      <div className="font-WorkSans flex flex-col gap-5 text-white">
        <h1 className="w-[510px] capitalize font-semibold text-[67px] leading-none">
          Discover digital art & Collect NFTs
        </h1>
        <p className="w-[510px] capitalize font-normal text-[22px]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <NavLink to="signup">
          <button className="bg-[#A259FF] py-5 px-12 rounded-[20px] font-WorkSans font-semibold text-base">
            <i className="fa-solid fa-rocket w-5 text-white mr-3"></i>Get
            Started
          </button>
        </NavLink>
        {/* Stat */}
        <div className="stat flex px-0 gap-16">
          {stat &&
            stat.map((info, key) => {
              return (
                <div key={key}>
                  <div className="stat-value font-SpaceMono font-bold text-3xl">
                    {Math.floor(info.info / 1000)}k+
                  </div>
                  <div className="stat-desc font-WorkSans font-normal text-2xl text-white">
                    {info.about}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <NavLink to="/">
        <img className="w-[510px]" src={BannerLogo} alt="" />
      </NavLink>
    </div>
  );
};

export default Banner;
