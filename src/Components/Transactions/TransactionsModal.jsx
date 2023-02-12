import {
  Modal,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { RiExchangeDollarFill } from "react-icons/ri";
import TransactionsTable from "./TransactionsTable";
import BetsTable from "../Play/BetsTable";
import TransactionsBetsTable from "./TransactionsBetsTable";

const TransactionsModal = () => {
  const { transactionsOpen, handleTransactionsClose, currentAccount } =
    useContext(Context);
  const [type, setType] = useState("transaction");

  return (
    <Modal open={transactionsOpen} onClose={handleTransactionsClose}>
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-0 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727] mb-4 py-2  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#CEFE02]">
                <RiExchangeDollarFill size={35} className="text-black" />
              </div>
              <h2>Transactions</h2>
            </div>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleTransactionsClose();
              }}
            />
          </div>
        </div>
        <div className="flex justify-around py-2 border-b-[1px] border-b-white mb-4">
          <h2
            className={`${
              type === "transaction" && "border-b-2"
            } border-b-[#EFD26E] cursor-pointer`}
            onClick={() => {
              setType("transaction");
            }}
          >
            Transaction
          </h2>
          <h2
            className={`${
              type === "bets" && "border-b-2"
            } border-b-[#EFD26E] cursor-pointer`}
            onClick={() => {
              setType("bets");
            }}
          >
            Bets
          </h2>
        </div>
        {type === "transaction" ? (
          <TransactionsTable />
        ) : (
          <TransactionsBetsTable />
        )}
      </div>
    </Modal>
  );
};

export default TransactionsModal;
