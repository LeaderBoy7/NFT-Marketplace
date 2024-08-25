import React from "react";
import ColCard from "./ColCard";
import BigImg1 from "./Images/BigImg1.png";
import BigImg2 from "./Images/BigImg2.png";
import BigImg3 from "./Images/BigImg3.png";
import SmallImg1 from "./Images/SmallImg1.png";
import SmallImg2 from "./Images/SmallImg2.png";
import SmallImg3 from "./Images/SmallImg3.png";
import SmallImg4 from "./Images/SmallImg4.png";
import SmallImg5 from "./Images/SmallImg5.png";
import SmallImg6 from "./Images/SmallImg6.png";
import Avatar1 from "./Images/Avatar1.png";
import Avatar2 from "./Images/Avatar2.png";
import Avatar3 from "./Images/Avatar3.png";

const Collection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h1 className="w-full pl-[90px] font-WorkSans font-semibold text-4xl text-white">
        Trending Collection
      </h1>
      <h2 className="w-full pl-[90px] font-WorkSans font-normal text-xl text-white capitalize">
        Checkout our weekly updated trending collection.
      </h2>
      <div className="mt-14 flex gap-[30px]">
        <ColCard
          bigimg={BigImg1}
          smallimg1={SmallImg1}
          smallimg2={SmallImg2}
          title="DSGN Animals"
          avatar={Avatar1}
          name="MrFox"
        />
        <ColCard
          bigimg={BigImg2}
          smallimg1={SmallImg3}
          smallimg2={SmallImg4}
          title="Magic Mushrooms"
          avatar={Avatar2}
          name="Shroomie"
        />
        <ColCard
          bigimg={BigImg3}
          smallimg1={SmallImg5}
          smallimg2={SmallImg6}
          title="Disco Machines"
          avatar={Avatar3}
          name="BeKind2Robots"
        />
      </div>
    </div>
  );
};

export default Collection;
