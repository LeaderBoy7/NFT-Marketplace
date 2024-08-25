import React from "react";

const TopCreators = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center">
      <h1 className="col-span-1 flex flex-col capitalize font-WorkSans text-white">
        <span className="font-semibold text-[38px] ">Top creators</span>
        <span className="font-normal text-[22px]">
          Checkout Top Rated Creators on the NFT Marketplace
        </span>
      </h1>
      <button className="col-span-1">
        <i className="fa-solid fa-rocket w-5 text-white mr-3"></i>View Rankings
      </button>
      <div className="col-span-2">1234</div>
    </div>
  );
};

export default TopCreators;
