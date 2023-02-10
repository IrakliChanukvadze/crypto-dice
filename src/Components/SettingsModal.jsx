import React, { useContext, useState } from "react";
import { Button, Modal } from "@mui/material";
import { Context } from "../Context/Context";
import Account from "./SettingsAccount";
import Verify from "./SettingsVerify";
import { responsiveCont } from "../Styles";
import { AiOutlineClose } from "react-icons/ai";

const SettingsModal = () => {
  const { settingOpen, handleSettingClose, currentAccount } =
    useContext(Context);

  const [type, setType] = useState("Account");
  return (
    <Modal
      open={settingOpen}
      onClose={handleSettingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-10 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727] mb-4  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <h2>Settings</h2>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleSettingClose();
              }}
            />
          </div>
        </div>
        <div className={`w-[94%] m-auto  `}>
          <div className="flex justify-around py-2 border-b-[1px] border-b-white mb-4">
            <h2
              className={`${
                type === "Account" && "border-b-2"
              } border-b-[#EFD26E] cursor-pointer`}
              onClick={() => {
                setType("Account");
              }}
            >
              Account
            </h2>
            <h2
              className={`${
                type === "Verify" && "border-b-2"
              } border-b-[#EFD26E] cursor-pointer`}
              onClick={() => {
                setType("Verify");
              }}
            >
              Verify
            </h2>
          </div>
          {type === "Account" ? <Account /> : <Verify />}
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
