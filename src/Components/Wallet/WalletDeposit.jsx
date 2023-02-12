import React, { useContext, useState } from "react";
import { FormControl, Select, MenuItem, LinearProgress } from "@mui/material";
import { Context } from "../../Context/Context";
import { AiOutlineQrcode } from "react-icons/ai";
import qrCode from "../../assets/qq.png";

const WalletDeposit = () => {
  const { trendingCoins, currency, currentAccount, setCurrentAccount } =
    useContext(Context);
  const [show, setShow] = useState("");
  const [depCur, setDepCur] = useState(currency.id);
  const [quantity, setQuantity] = useState(0);
  const [address, setAdress] = useState("");
  const [error, setError] = useState("");

  const [errorDeposit, setErrorDeposit] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(errorDeposit);
  return (
    <div className="my-6">
      <div className="flex justify-center">
        <FormControl>
          <Select
            value={depCur}
            disableUnderline={true}
            labelStyle={{ color: "#ff0000" }}
            variant="standard"
            sx={{
              backgroundColor: "#272727",
              width: "140px",
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
                  <h2>{item.symbol}</h2>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p className="text-[12px] leading-3 md:text-xl  xl:text-2xl opacity-50 mb-[6px] md:mb-[9px] mt-4 md:mt-6 tracking-[3px]">
        ID document number
      </p>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="w-full ">
            <input
              value={address}
              onChange={(e) => {
                setAdress(e.target.value);
                if (e.target.value) {
                  setError("");
                }
              }}
              type={"text"}
              className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
              placeholder="your id number here"
            />
          </div>
        </div>
        <div
          className=" bg-[#989898] target w-12 h-12  rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          <AiOutlineQrcode size={25} className="text-black" />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1"> {error} </p>}
      {show ? (
        <div className="flex items-center justify-center mt-6">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
            <img src={qrCode} className="w-32 h-32" />{" "}
          </div>
        </div>
      ) : (
        <div>
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
                    trendingCoins.find((item) => item.id === depCur)
                      .current_price
                  ).toFixed(12)}
                  onChange={(e) => {
                    if (e.target.value < 0) {
                    } else {
                      setQuantity(e.target.value);
                      if (e.target.value) {
                        setErrorDeposit("");
                      }
                    }
                  }}
                  type="number"
                  className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
                  placeholder="Write ammount here"
                />
              </div>
            </div>
          </div>
          {errorDeposit && (
            <p className="text-red-500 text-sm mt-1"> {errorDeposit} </p>
          )}
          {loading && <LinearProgress sx={{ marginTop: "24px" }} />}
          <div className="flex justify-center mt-6">
            <button
              className="bg-[#EFD26E] text-black tracking-[2px] px-10 py-2 font-bold"
              onClick={() => {
                if (!address) {
                  setError("required");
                } else if (!quantity) {
                  setErrorDeposit("required");
                } else {
                  const d = new Date();
                  let day = d.getDate();
                  let month = d.getMonth();
                  let year = d.getFullYear();
                  let hour = d.getHours();
                  let minutes = d.getMinutes();
                  const withdrawMoneyInUsd =
                    quantity *
                    trendingCoins.find((item) => item.id === depCur)
                      .current_price;
                  setLoading(true);
                  setTimeout(() => {
                    console.log("entered");
                    setCurrentAccount((prev) => ({
                      ...prev,
                      transactions: [
                        {
                          type: "deposit",
                          date: `${hour}:${minutes} ${day}/${
                            month + 1
                          }/${year}`,
                          ammount: `$ ${withdrawMoneyInUsd}`,
                          id: prev.transactionsId,
                        },
                        ...prev.transactions,
                      ],
                      transactionsId: ++prev.transactionsId,
                      currentMoney: prev.currentMoney + withdrawMoneyInUsd,
                    }));
                    setQuantity("");
                    setLoading(false);
                  }, 1000);
                }
              }}
            >
              Deposit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDeposit;
