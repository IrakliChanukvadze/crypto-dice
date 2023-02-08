import React from "react";
import { footerData } from "../Data";
import { responsiveCont } from "../Styles";

const Footer = () => {
  return (
    <div className="py-10  border-t-[1px]">
      <div
        className={`${responsiveCont} grid grid-cols-3 footerResponsive:grid-cols-6 gap-6 justify-items-center`}
      >
        {footerData.map((item) => (
          <h2
            key={item.title}
            className="text-[#fff] cursor-pointer hover:text-[#1D84E2]    text-lg xl:text-xl"
          >
            {item.title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Footer;
