import { Modal, Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import { SlWallet } from "react-icons/sl";
import WalletDeposit from "./WalletDeposit";
import WalletWithdraw from "./WalletWithdraw";

const WalletModal = () => {
  const { walletOpen, handleWalletClose, currentAccount, setCurrentAccount } =
    useContext(Context);
  const [type, setType] = useState("Deposit");

  return (
    <Modal open={walletOpen} onClose={handleWalletClose}>
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-0 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727] mb-4 py-2  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 bg-[#EFD26E] rounded-full flex items-center justify-center">
                <SlWallet size={25} className="text-black" />
              </div>
              <h2>Wallet</h2>
            </div>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleWalletClose();
              }}
            />
          </div>
        </div>
        <div className="w-[94%] m-auto">
          <div className="flex justify-around py-2 border-b-[1px] border-b-white mb-4">
            <h2
              className={`${
                type === "Deposit" && "border-b-2"
              } border-b-[#EFD26E] cursor-pointer`}
              onClick={() => {
                setType("Deposit");
              }}
            >
              Deposit
            </h2>
            <h2
              className={`${
                type === "Withdraw" && "border-b-2"
              } border-b-[#EFD26E] cursor-pointer`}
              onClick={() => {
                setType("Withdraw");
              }}
            >
              Withdraw
            </h2>
          </div>
          {type === "Deposit" ? <WalletDeposit /> : <WalletWithdraw />}
        </div>
        <div className="w-full bg-[#272727] py-4 ">
          <div className="w-[94%] m-auto flex justify-between items-center">
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-white text-xl ">
                {" "}
                Two - factor authorication
              </h2>
              <p className="text-[12px] text-[#838383]">
                Add extra security to your account
              </p>
            </div>
            <Switch
              name={"twoStepAuthentikation"}
              checked={currentAccount.twoStepAuthentikation}
              onChange={() => {
                setCurrentAccount((prev) => ({
                  ...prev,
                  twoStepAuthentikation: !prev.twoStepAuthentikation,
                }));
              }}
              size="medium"
              color="success"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;
