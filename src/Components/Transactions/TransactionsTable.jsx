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
import { AiOutlineCheck } from "react-icons/ai";

const TransactionsTable = () => {
  const { currentAccount } = useContext(Context);
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="w-[94%] m-auto my-6 overflow-auto overflow-y-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-500 scrollbar-h-20 scrollbar-rounded-8">
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
                    <h2 className="text-white font-normal ">{item.ammount}</h2>
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
              backgroundColor: "gold",
              color: "#121413",
              font: "bold",
            },
          }}
          count={Math.ceil(currentAccount?.transactions?.length / 8)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  );
};

export default TransactionsTable;
