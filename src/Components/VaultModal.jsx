import { Modal, Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import VaultDeposit from "./VaultDeposit";
import VaultWithdraw from "./VaultWithdraw";

const VaultModal = () => {
  const { vaultOpen, handleVaultClose, currentAccount } = useContext(Context);
  const [type, setType] = useState("Deposit");

  return (
    <Modal open={vaultOpen} onClose={handleVaultClose}>
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-0 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727] mb-4 py-2  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <div className="flex gap-2 items-center">
              <h2>Vault</h2>
            </div>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleVaultClose();
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
          {type === "Deposit" ? <VaultDeposit /> : <VaultWithdraw />}
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

export default VaultModal;
