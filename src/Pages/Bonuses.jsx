import React, { useState } from "react";
import BonusCont from "../Components/BonusCont";
import { responsiveCont } from "../Styles";
import { bonusesData } from "../Data";
import { AiOutlineGift } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Bonuses = () => {
  const navigate = useNavigate();

  return (
    <div className={`${responsiveCont}  h-[80%] pt-24 pb-10`}>
      <div>
        <h2
          className="text-white opacity-80 text-lg md:text-xl xl:text-2xl py-10 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </h2>

        <div className="flex items-center gap-6 mb-10">
          <div className="w-12 h-12 bg-[#CEFE02] rounded-full flex items-center justify-center ">
            <AiOutlineGift size={25} className="text-black font-bold" />
          </div>
          <h2 className="text-white text-xl md:text-2xl xl:text-4xl">
            Bonuses
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {bonusesData.map((item) => (
            <BonusCont
              key={item.title}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
