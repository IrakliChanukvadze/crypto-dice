import React from "react";

const HomeBonusItem = ({
  img,
  title,
  description,
  focus,
  number,
  setCount,
}) => {
  return (
    <div
      className={`bg-black flex flex-col items-center justify-center bg-[${
        focus ? "#1D84E2" : "black"
      }]  text-white py-6 px-4 uxs:px-2 sm:px-4 gap-4 cursor-pointer`}
      onClick={() => setCount(number)}
    >
      <img src={img} className="rounded-full w-32 my-4" />
      <div className={`opacity-${focus ? "100" : "40"}`}>
        <h2 className="text-white mb-6 text-xl sm:text-2xl">{title}</h2>
        <p className="text-[#F2F2F2] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HomeBonusItem;
