import { Modal } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const BetInfo = () => {
  const { betInfoOpen, handleBetInfoClose, currentAccount } =
    useContext(Context);
  const data = currentAccount?.bets?.find(
    (item) => item?.id === currentAccount?.betInfoId
  );
  console.log(data);
  return (
    <Modal open={betInfoOpen} onClose={handleBetInfoClose}>
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-0 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727] mb-4 py-2  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <div className="flex gap-2 items-center">
              <h2>Bet Info</h2>
            </div>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleBetInfoClose();
              }}
            />
          </div>
        </div>
        <div className="w-[94%] m-auto flex justify-between items-center ">
          <div className="flex gap-2 items-center bg-[#272727] px-4 py-[2px] rounded-[30px]">
            <AiOutlineCheck size={20} className="text-[#CEFE02]" />
            <h2>Bet</h2>
            <h2
              className={`${
                data?.result === "win" ? "text-[#CEFE02]" : "text-[#E05E39]"
              }`}
            >
              {data?.id}
            </h2>
          </div>
          <h2
            className={`${
              data?.result === "win" ? "text-[#CEFE02]" : "text-[#E05E39]"
            } text-xl`}
          >
            {data?.result === "win" ? "VICTORY" : "LOSS"}
          </h2>
        </div>
        <div className="w-[94%] m-auto flex justify-between items-center py-4 border-b-2 border-b-white  ">
          <div className="flex gap-2 items-center bg-[#272727] px-4 py-[2px] rounded-[30px]">
            <CgProfile size="20" />
            <h2>{currentAccount?.userName}</h2>
          </div>
          <div className="bg-[#272727] px-4 py-[2px] rounded-[30px]">
            <h2>{data?.date}</h2>
          </div>
        </div>
        <div className="py-6 w-[94%] m-auto">
          <div className="flex items-center gap-4">
            <h2 className="opacity-50">Bet Amount:</h2>
            <h2>{data?.amount}</h2>
            <img src={data?.img} className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex items-center gap-4 my-4">
            <h2 className="opacity-50">Chance:</h2>
            <h2>{data?.chance}%</h2>
          </div>
          <div className="flex items-center gap-4 my-4">
            <h2 className="opacity-50">Multiplier:</h2>
            <h2>{data?.multiplier}</h2>
          </div>
          <div className="flex items-center gap-4 my-4">
            <h2 className="opacity-50">Payout:</h2>
            <h2>{data?.payout}</h2>
          </div>
          <div className="flex items-center gap-4 my-4 ">
            <h2 className="opacity-50">Profit:</h2>
            <h2
              className={`${
                data?.payout - data?.amount > 0
                  ? "text-[#CEFE02]"
                  : "text-[#E05E39]"
              }`}
            >
              {data?.payout - data?.amount}
            </h2>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BetInfo;
