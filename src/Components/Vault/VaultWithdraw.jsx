import React, { useState, useContext } from "react";
import { Select, FormControl, MenuItem, LinearProgress } from "@mui/material";
import { Context } from "../../Context/Context";

const VaultWithdraw = () => {
  const { trendingCoins, currency, currentAccount, setCurrentAccount } =
    useContext(Context);
  const [depCur, setDepCur] = useState(currency.id);
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="pb-10 pt-6">
      <div className="flex justify-center gap-4 items-center w-full">
        <h2>Current deposit:</h2>
        <FormControl>
          <Select
            value={depCur}
            disableUnderline={true}
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
                  <h2>
                    {(
                      currentAccount?.currentMoney / item?.current_price
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
                if (e.target.value < 0) {
                } else {
                  setQuantity(e.target.value);
                }
              }}
              type="number"
              className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
              placeholder="Write ammount here"
            />
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1"> {error} </p>}
      {loading && <LinearProgress sx={{ marginTop: "24px" }} />}
      <div className="flex justify-center mt-6">
        <button
          className="bg-[#EFD26E] text-black tracking-[2px] px-10 py-2 font-bold"
          onClick={() => {
            const currencyPrice = trendingCoins.find(
              (item) => item.id === depCur
            ).current_price;
            if (quantity > currentAccount.currentMoney / currencyPrice) {
              setError("not enough balanse");
              setQuantity("");
            } else if (quantity > 0) {
              const d = new Date();
              let day = d.getDate();
              let month = d.getMonth();
              let year = d.getFullYear();
              let hour = d.getHours();
              let minutes = d.getMinutes();
              if (minutes < 10) {
                minutes = `0${minutes}`;
              }

              const withdrawMoneyInUsd =
                quantity *
                trendingCoins
                  .find((item) => item.id === depCur)
                  .current_price.toFixed(4);
              setLoading(true);
              setTimeout(() => {
                setCurrentAccount((prev) => ({
                  ...prev,
                  transactions: [
                    {
                      type: "vault-withdraw",
                      date: `${hour}:${minutes} ${day}/${month + 1}/${year}`,
                      ammount: `$ ${withdrawMoneyInUsd}`,
                      id: prev.transactionsId,
                    },
                    ...prev.transactions,
                  ],
                  transactionsId: ++prev.transactionsId,
                  currentMoney: prev.currentMoney - withdrawMoneyInUsd,
                  vaultBallance: prev.vaultBallance + withdrawMoneyInUsd,
                }));
                setQuantity("");
                setLoading(false);
              }, 1000);
            } else {
              setError("required");
            }
          }}
        >
          Withdraw
        </button>
      </div>
      <div className="w-full flex justify-between mt-6">
        <h2
          className="text-[#8D8D8D] font-normal cursor-pointer"
          onClick={() =>
            setCurrentAccount((prev) => ({
              ...prev,
              settings: {
                ...prev.settings,
                account: {
                  ...prev.settings.account,
                  showVaultBallance: !prev.settings.account.showVaultBallance,
                },
              },
            }))
          }
        >
          {currentAccount.settings.account.showVaultBallance ? "hide" : "show"}{" "}
          vault ballance
        </h2>
        {currentAccount.settings.account.showVaultBallance && (
          <div className="flex items-center gap-2">
            <h2 className="text-[#CEFE02]">
              {currentAccount.vaultBallance /
                trendingCoins.find((item) => item.id === depCur).current_price}
            </h2>
            <img
              src={trendingCoins.find((item) => item.id === depCur).image}
              className="w-6 h-6 rounded-full "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VaultWithdraw;
