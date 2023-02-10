import React, { useContext, useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { Context } from "../Context/Context";
import { AiOutlineQrcode } from "react-icons/ai";
import { TfiEye } from "react-icons/tfi";
import qrCode from "../assets/qq.png";

const WalletDeposit = () => {
  const { trendingCoins, currency } = useContext(Context);
  const [show, setShow] = useState("");
  const [depCur, setDepCur] = useState(currency.id);
  return (
    <div className="my-6">
      <div className="flex justify-center">
        <FormControl>
          <Select
            value={depCur}
            disableUnderline={true}
            labelStyle={{ color: "#ff0000" }}
            variant="standard"
            sx={{
              backgroundColor: "#272727",
              width: "140px",
              borderRadius: "30px",
              color: "white",
              padding: "2px 8px",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#5A5A5A",
                },
              },
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setDepCur(e.target.value);
            }}
          >
            {trendingCoins?.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                <div className="text-white hover:text-[#1D84E2]  flex items-center gap-2">
                  <img src={item.image} className="w-8 h-8" />
                  <h2>{item.symbol}</h2>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p className="text-[12px] leading-3 md:text-xl  xl:text-2xl opacity-50 mb-[6px] md:mb-[9px] mt-4 md:mt-6 tracking-[3px]">
        ID document number
      </p>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="w-full ">
            <input
              type={"text"}
              className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
              placeholder="your id number here"
            />
          </div>
        </div>
        <div
          className=" bg-[#989898] target w-12 h-12  rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          <AiOutlineQrcode size={25} className="text-black" />
        </div>
      </div>
      {show && (
        <div className="flex items-center justify-center mt-6">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
            <img src={qrCode} className="w-32 h-32" />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDeposit;
