import React, { useContext } from "react";
import { responsiveCont } from "../../Styles";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

const HomeSection = ({ title, img, color, description }) => {
  const navigate = useNavigate();
  const { currentAccount } = useContext(Context);
  return (
    <div
      className={`${responsiveCont} bg-[${color}] px-4 uxs:px-6 sm:px-8 mt-10 py-10`}
    >
      <div className="flex justify-between items-center mb-6 flex-col-reverse sm:flex-row gap-6 sm:gap-0">
        <h2 className="text-sm uxs:text-2xl md:text-4xl font-bold">{title}</h2>
        <button
          className={`text-[${color}] bg-black rounded-[10px] px-4 md:px-6 py-2`}
          onClick={() => {
            if (currentAccount) {
              navigate("/play");
            } else {
              alert("please login to continue");
            }
          }}
        >
          Start Now
        </button>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <img
          src={img}
          className="w-[250px] h-32 uxs:w-[300px] uxs:h-44 md:w-[400px] md:h-60 mx-auto"
        />
        <p className="flex-1 font-normal opacity-90 ">{description}</p>
      </div>
    </div>
  );
};

export default HomeSection;
