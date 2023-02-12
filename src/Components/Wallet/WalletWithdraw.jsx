import React, { useContext, useEffect, useState } from "react";
import { FormControl, Select, MenuItem, LinearProgress } from "@mui/material";
import { Context } from "../../Context/Context";

const WalletWithdraw = () => {
  const {
    trendingCoins,
    currency,
    setCurrency,
    currentAccount,
    setCurrentAccount,
  } = useContext(Context);
  const [depCur, setDepCur] = useState(currency.id);
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="my-6 ">
      <div className="flex justify-center">
        <FormControl>
          <Select
            value={depCur}
            disableUnderline={true}
            labelStyle={{ color: "#ff0000" }}
            variant="standard"
            sx={{
              backgroundColor: "#272727",
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
              setDepCur(e.target.value);
            }}
          >
            {trendingCoins?.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                <div className="text-white hover:text-[#1D84E2]  flex items-center gap-2">
                  <img src={item.image} className="w-8 h-8" />
                  {(currentAccount?.currentMoney / item?.current_price).toFixed(
                    12
                  )}
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p className="text-[12px] leading-3 md:text-xl  xl:text-2xl opacity-50 mb-[6px] md:mb-[9px] mt-4 md:mt-6 tracking-[3px]">
        Adress
      </p>
      <div className="flex gap-4">
        <div className="flex-1 ">
          <div className="w-full  ">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
              placeholder="Your Adress"
            />
          </div>
        </div>
      </div>
      {error.includes("address") && (
        <p className="text-red-500 text-sm mt-1"> required </p>
      )}
      <p className="text-[12px] leading-3 md:text-xl  xl:text-2xl opacity-50 mb-[6px] md:mb-[9px] mt-4 md:mt-6 tracking-[3px]">
        Ammount
      </p>
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <img
            src={trendingCoins.find((item) => item.id === depCur).image}
            className="absolute w-6 h-6 rounded-full top-[50%] -translate-y-[50%] right-[10px]"
          />
          <div className="w-full ">
            <input
              value={quantity}
              max={(
                currentAccount?.currentMoney /
                trendingCoins.find((item) => item.id === depCur).current_price
              ).toFixed(12)}
              onChange={(e) => {
                if (
                  e.target.value >
                  (
                    currentAccount?.currentMoney /
                    trendingCoins.find((item) => item.id === depCur)
                      .current_price
                  ).toFixed(12)
                ) {
                } else if (e.target.value < 0) {
                } else {
                  setQuantity(e.target.value);
                }
              }}
              type="number"
              className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
              placeholder="Ammount"
            />
          </div>
        </div>

        <div className=" bg-[#989898] target w-16 h-12  rounded-full flex justify-center items-center cursor-pointer">
          <h2
            className="text-black"
            onClick={() => {
              setCurrency(trendingCoins.find((item) => item.id === depCur));
              setQuantity(
                (currentAccount?.currentMoney / currency.current_price).toFixed(
                  12
                )
              );
            }}
          >
            Max
          </h2>
        </div>
      </div>
      {error.includes("amount") && (
        <p className="text-red-500 text-sm mt-1"> required </p>
      )}
      {loading && <LinearProgress sx={{ marginTop: "24px" }} />}
      <div className="flex justify-center mt-6">
        <button
          className="bg-[#EFD26E] text-black tracking-[2px] px-10 py-2 font-bold"
          onClick={() => {
            if (quantity > 0 && address) {
              const withdrawMoneyInUsd =
                quantity *
                trendingCoins.find((item) => item.id === depCur).current_price;
              const d = new Date();
              let day = d.getDate();
              let month = d.getMonth();
              let year = d.getFullYear();
              let hour = d.getHours();
              let minutes = d.getMinutes();
              setLoading(true);
              setTimeout(() => {
                setCurrentAccount((prev) => ({
                  ...prev,
                  transactions: [
                    {
                      type: "withdraw",
                      date: `${hour}:${minutes} ${day}/${month + 1}/${year}`,
                      ammount: withdrawMoneyInUsd,
                      id: Math.floor(Math.random() * 10000000),
                    },
                    ...prev.transactions,
                  ],
                  currentMoney: prev.currentMoney - withdrawMoneyInUsd,
                }));
                setError("");
                setQuantity("");
                setLoading(false);
              }, 2000);
            } else {
              if (!address && quantity > 0) {
                setError("address");
              } else if (address) {
                setError("amount");
              } else {
                setError("address amount");
              }
            }
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WalletWithdraw;
