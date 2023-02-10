import { Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import profile from "../assets/profile-avatar.png";

const MyInfoModal = () => {
  const { myInfoOpen, handleMyInfoClose, currentAccount } = useContext(Context);
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);
  useEffect(() => {
    if (render) {
      setRender(false);
      setData([
        {
          title: "Wins",
          num: currentAccount.totalWin,
          color: "text-[#CEFE02]",
        },
        {
          title: "Looses",
          num: currentAccount.totalLoose,
          color: "text-[#FE0202]",
        },
        {
          title: "Profit",
          num: `${currentAccount.totalWin - currentAccount.totalLoose} $`,
          color: `${
            currentAccount.totalWin - currentAccount.totalLoose >= 0
              ? "text-[#CEFE02]"
              : "text-[#FE0202]"
          } `,
        },
        { title: "Profit Rank", num: "N/A" },
        { title: "Messages", num: currentAccount.messages.length },
        { title: "Bets", num: currentAccount.totalBets },
      ]);
    }
  }, []);

  return (
    <Modal open={myInfoOpen} onClose={handleMyInfoClose}>
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-8 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727] mb-4  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <h2>My Info</h2>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleMyInfoClose();
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <img
            src={profile}
            alt="profile-picture"
            className="w-32 h-32 rounded-full"
          />
          <h2>{currentAccount.userName}</h2>
        </div>
        <div className="w-[94%] m-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 justify-items-center mt-6">
          {data.map((item) => (
            <div className="bg-[#272727] w-full md:w-[200px] h-auto md:h-[150px]   py-2 px-4 md:py-5 md:px-5 flex flex-row md:flex-col justify-between items-start">
              <h2 className="text-[#8D8D8D] font-normal">{item.title}</h2>
              <h2 className={`${item.color && item.color}`}>{item.num}</h2>
            </div>
          ))}
        </div>
        <div className="w-[94%] m-auto flex justify-between mt-6">
          <h2 className="text-[#8D8D8D] font-normal">Joined on cryptodice</h2>
          <h2 className="text-[#8D8D8D] font-normal">
            {currentAccount.joinData}
          </h2>
        </div>
      </div>
    </Modal>
  );
};

export default MyInfoModal;
