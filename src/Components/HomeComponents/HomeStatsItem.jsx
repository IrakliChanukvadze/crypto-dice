import React from "react";

const HomeStatsItem = ({ icon, title, num }) => {
  return (
    <div className="aspect-square bg-black flex flex-col justify-between px-4 py-4">
      <h2 className="font-normal text-3xl uxs:text-sm sm:text-4xl md:text-2xl">
        {title}
      </h2>
      {icon}
      <h2 className="font-normal text-3xl uxs:text-sm sm:text-4xl md:text-2xl">
        {num}
      </h2>
    </div>
  );
};

export default HomeStatsItem;
