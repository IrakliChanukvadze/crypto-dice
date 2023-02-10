import React, { useState, useContext } from "react";
import { Select, FormControl, MenuItem } from "@mui/material";
import { Context } from "../Context/Context";

const VaultDeposit = () => {
  const { trendingCoins, currency, currentAccount, setCurrentAccount } =
    useContext(Context);
  const [show, setShow] = useState("");
  const [error, setError] = useState("");
  const [depCur, setDepCur] = useState(currency.id);
  const [quantity, setQuantity] = useState("");
  return (
    <div className="pb-10 pt-6">
      <div className="flex justify-center gap-4 items-center w-full">
        <h2>Vault deposit:</h2>
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
              console.log(e.target.value);
              setDepCur(e.target.value);
            }}
          >
            {trendingCoins?.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                <div className="text-white hover:text-[#1D84E2]  flex items-center gap-2">
                  <img src={item.image} className="w-8 h-8" />
                  <h2>
                    {(
                      currentAccount?.vaultBallance / item?.current_price
                    ).toFixed(14)}
                  </h2>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
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
                currentAccount?.vaultBallance /
                trendingCoins.find((item) => item.id === depCur).current_price
              ).toFixed(12)}
              onChange={(e) => {
                if (
                  e.target.value >
                  (
                    currentAccount?.vaultBallance /
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
      </div>
      {error && <p className="text-red-500 text-sm mt-1"> {error} </p>}
      <div className="flex justify-center mt-6">
        <button
          className="bg-[#EFD26E] text-black tracking-[2px] px-10 py-2 font-bold"
          onClick={() => {
            if (quantity > currentAccount.vaultBallance) {
              setError("not enough balanse");
            } else if (!quantity) {
              setError("required");
            } else {
              const withdrawMoneyInUsd =
                quantity *
                trendingCoins.find((item) => item.id === depCur).current_price;
              setCurrentAccount((prev) => ({
                ...prev,
                vaultBallance: prev.vaultBallance - withdrawMoneyInUsd,
                currentMoney: prev.currentMoney + withdrawMoneyInUsd,
              }));
            }
          }}
        >
          Deposit
        </button>
      </div>
    </div>
  );
};

export default VaultDeposit;
