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

const TransactionsModal = () => {
  const { transactionsOpen, handleTransactionsClose, currentAccount } =
    useContext(Context);
  const [page, setPage] = useState(1);

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
        <div className="w-[94%] m-auto my-6 overflow-scroll">
          <Table>
            <TableHead sx={{ backgroundColor: "#EEBC1E", color: "black" }}>
              <TableRow>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Date
                  </h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Type
                  </h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Amount
                  </h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Status
                  </h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentAccount?.transactions
                ?.slice((page - 1) * 8, (page - 1) * 8 + 8)
                .map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      backgroundColor: "#16171a",
                      "&:hover": {
                        backgroundColor: "#131111",
                      },
                    }}
                  >
                    <TableCell>
                      <h2 className="text-white font-normal ">{item.date}</h2>
                    </TableCell>
                    <TableCell>
                      <h2 className="text-white font-normal ">{item.type}</h2>
                    </TableCell>
                    <TableCell>
                      <h2 className="text-white font-normal ">
                        {item.ammount}
                      </h2>
                    </TableCell>
                    <TableCell>
                      <AiOutlineCheck size={25} className="text-green-500" />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center w-full mb-6">
          <Pagination
            sx={{
              color: "gold",
              border: "none",
              "& .MuiPaginationItem-root": {
                color: "gold",
                ml: "8px",
              },
              "& .Mui-selected": {
                backgroundColor: "#fff",
                color: "black",
                font: "bold",
              },
            }}
            count={Math.ceil(currentAccount?.transactions?.length / 8)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default TransactionsModal;
