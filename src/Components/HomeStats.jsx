import React from "react";
import { responsiveCont } from "../Styles";
import { statsData } from "../Data";
import HomeStatsItem from "./HomeStatsItem";

const HomeStats = () => {
  return (
    <div className="bg-[#272727] w-full text-white py-4">
      <div
        className={`${responsiveCont} grid grid-cols-1 uxs:grid-cols-2 md:grid-cols-4 gap-6 uxs:gap-10 md:gap-8 xl:gap-12`}
      >
        {statsData.map((item) => (
          <HomeStatsItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            num={item.num}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
