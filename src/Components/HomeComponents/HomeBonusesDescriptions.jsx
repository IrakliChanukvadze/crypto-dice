import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import { homeBonusesDescriptionsData } from "../../Data";
import { responsiveCont } from "../../Styles";

const HomeBonusesDescriptions = () => {
  const navigate = useNavigate();
  const { currentAccount } = useContext(Context);
  return (
    <div className={`border-t-[1px]  sm:border-t-0  pb-0 `}>
      {homeBonusesDescriptionsData.map((item, index) => (
        <div
          key={item.imgTitle}
          className=" w-full border-b-[1px] border-t-[1px] sm:border-t-0 sm:border-b-0"
        >
          <div
            className={`${responsiveCont} flex flex-col  ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } text-white   py-10 px-6   border-l-[1px] border-r-[1px] sm:border-l-0 sm:border-r-0 `}
          >
            <div className=" flex flex-col items-center gap-6 ">
              <img src={item.img} className={"w-56 h-44 rounded-full"} />

              <h2
                onClick={() => {
                  if (item.imgTitle !== "play") {
                    navigate(item.link);
                  } else if (currentAccount) {
                    navigate(item.link);
                  } else {
                    alert("please login to continue");
                  }
                }}
                className={`${item.color} text-xl md:text-lg xl:text-xl font-bold tracking-[3px] xl:tracking-[6px] cursor-pointer`}
              >
                {item.imgTitle}
              </h2>
            </div>
            <div className="w-[90%] mx-auto sm:w-[75%] flex flex-col  gap-6">
              {item.title}
              <p className="text-[#5A5A5A] font-normal w-90% text-sm md:text-lg xl:text-xl">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBonusesDescriptions;
