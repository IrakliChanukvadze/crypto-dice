import React, { useState } from "react";
import { responsiveCont } from "../../Styles";
import { homeBonusesData } from "../../Data";
import HomeBonusItem from "./HomeBonusItem";

const HomeBonuses = () => {
  const [but, setBut] = useState("next");
  const [count, setCount] = useState(1);

  return (
    <div className="bg-[#272727] w-full pb-10">
      <div className={`${responsiveCont}`}>
        <div className="flex justify-between w-full h-16 items-center">
          <h2 className="text-white">News and bonuses</h2>
          <div className="flex gap-4">
            <h2
              className={`${
                but === "next" && "opacity-40"
              } text-[#F2F2F2] cursor-pointer`}
              onClick={() => {
                setBut("previous");
                setCount((prev) => {
                  if (prev === 0) {
                    return 3;
                  }
                  return --prev;
                });
              }}
            >
              Previous
            </h2>
            <h2
              className={`${
                but === "previous" && "opacity-40"
              } text-[#F2F2F2] cursor-pointer`}
              onClick={() => {
                setBut("next");
                setCount((prev) => ++prev);
              }}
            >
              Next
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 uxs:grid-cols-2 md:grid-cols-4 gap-10">
          {homeBonusesData.map((item) => (
            <HomeBonusItem
              key={item.title}
              title={item.title}
              img={item.img}
              description={item.description}
              focus={
                count % 4 === item.number || (count % 4) * -1 === item.number
              }
              number={item.number}
              setCount={setCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBonuses;
