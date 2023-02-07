import React from "react";

const BonusCont = ({ title, description, color }) => {
  return (
    <div
      className={`${color}  flex flex-col gap-4 pt-6 px-6 md:pt-[50px] md:px-[50px] h-[200px] md:h-[300px]  `}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm font-normal">{description}</p>
    </div>
  );
};

export default BonusCont;
