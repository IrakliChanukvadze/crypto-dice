import React from "react";
import { responsiveCont } from "../../Styles";
const HomeHero = () => {
  return (
    <div
      className={`${responsiveCont} pt-24 uxs:pt-20 border-[1px] sm:border-0`}
    >
      <div className="w-[94%] m-auto pt-10 ">
        <div className="w-full border-b-[1px] border-b-[#F2F2F2] flex text-white flex-col xl:flex-row pb-6 gap-4  md:gap-6 xl:gap-0">
          <h2 className="flex-1  text-[#1D84E2] text-[48px] leading-[48px] md:text-[100px] md:leading-[80px] xl:leading-[120px] xl:text-[120px] font-bold border-b-[1px] sm:border-b-0 pb-6 sm:pb-0">
            Cryptodice <br /> creative <br /> approach
          </h2>
          <h2 className="flex-1 text-[48px] leading-[48px] xl:leading-[120px] md:text-[100px] md:leading-[80px] xl:text-[120px] font-bold xl:text-end ">
            to the <br /> good old <br /> dice game
          </h2>
        </div>
        <div className="w-full flex justify-between py-10 items-center flex-col sm:flex-row gap-4 sm:gap-0">
          <p className="text-white opacity-40 text-xs sm:text-base md:text-xl ">
            Just look for going to make yourself a nice cup of coffee.
          </p>
          <button className="bg-[#CEFE02] rounded-[10px] py-2 px-6">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
