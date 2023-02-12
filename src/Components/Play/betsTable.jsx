import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { responsiveCont } from "../../Styles";

const BetsTable = ({ props }) => {
  const [page, setPage] = useState(1);
  const { handleBetInfoOpen, setCurrentAccount, currentAccount } =
    useContext(Context);

  return (
    <div className={`${responsiveCont} m-auto my-6 hidden md:block`}>
      <div className="w-full bg-[#414141] py-2 mt-6  ">
        <div className="flex justify-between h-10 md:h-14 bg-[#414141] items-center  w-[94%] m-auto text-base md:text-xl">
          <div className="flex gap-2 items-center">
            <h2 className="text-[#CEFE02]">Bets History</h2>
          </div>
        </div>
      </div>
      {currentAccount?.bets?.length < 1 ? (
        <h2 className="text-white mt-6 text-center">
          Your bets history is empty
        </h2>
      ) : (
        <>
          <Table>
            <TableHead sx={{ backgroundColor: "#EEBC1E", color: "black" }}>
              <TableRow>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    BetId
                  </h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Date
                  </h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Amount
                  </h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-black font-semibold tracking-[1px]">
                    Payout
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
              {currentAccount?.bets
                ?.slice((page - 1) * 8, page * 8)
                .map((item) => (
                  <TableRow
                    key={item.id}
                    onClick={() => {
                      console.log("clicked");
                      setCurrentAccount((prev) => ({
                        ...prev,
                        betInfoId: item.id,
                      }));
                      handleBetInfoOpen();
                    }}
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#16171a",
                      "&:hover": {
                        backgroundColor: "#131111",
                      },
                    }}
                  >
                    <TableCell>
                      <h2 className="text-white font-normal text-xs  ">
                        {item.id}
                      </h2>
                    </TableCell>
                    <TableCell>
                      <h2 className="text-white font-normal text-xs  ">
                        {item.date}
                      </h2>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 items-center">
                        <img
                          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                          className="w-8 h-8 rounded-full"
                        />
                        <h2 className="text-white font-normal text-xs  ">
                          {item.amount}
                        </h2>
                      </div>
                    </TableCell>

                    <TableCell>
                      <h2 className="text-white font-normal text-xs  ">
                        {item.payout}
                      </h2>
                    </TableCell>
                    <TableCell>
                      <h2
                        className={`${
                          item.result === "win"
                            ? "text-[#00FF22]"
                            : "text-[#FF0000]"
                        } font-normal text-xs `}
                      >
                        {item.result}
                      </h2>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <div className="flex justify-center w-full mb-6 ">
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
                  color: "black",
                  font: "bold",
                },
              }}
              count={Math.ceil(currentAccount?.bets?.length / 8)}
              page={page}
              onChange={(event, value) => setPage(value)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BetsTable;
