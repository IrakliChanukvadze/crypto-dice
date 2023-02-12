import React, { useEffect, useState } from "react";
import { CgInfinity } from "react-icons/cg";
import { GiStopSign } from "react-icons/gi";

const BettingAuto = ({ props }) => {
  const {
    currency,
    error,
    setBet,
    setError,
    bet,
    currentAccount,
    start,
    numBets,
    setNumBets,
  } = props;

  const [autoNum, setAutoNum] = useState(0);

  useEffect(() => {
    if (numBets > 0) {
      setTimeout(() => {
        start();
        setNumBets((prev) => prev - 1);
      }, 1000);
    } else {
      setAutoNum(0);
    }
  }, [numBets]);

  return (
    <div>
      <div className="flex justify-between w-full pt-4 pb-2 text-[#F2F2F2] opacity-60">
        <h2>Bet Amount</h2>
        <h2>{(bet * currency?.current_price).toFixed(2)} $</h2>
      </div>
      <div className="w-full flex gap-2 items-center ">
        <div className="flex-1 relative">
          <img
            src={currency?.image}
            className="absolute w-6 h-6 rounded-full top-[50%] -translate-y-[50%] right-[10px]"
          />
          <input
            value={bet}
            onChange={(e) => {
              if (e.target.value < 0) {
              } else if (
                e.target.value * currency?.current_price >
                currentAccount.currentMoney
              ) {
                setBet(0);
                setError("Not enough ballance");
              } else if (e.target.value * currency?.current_price > 100000) {
                setBet(0);
                setError("max bet is 100,000$");
              } else {
                if (bet === 0 && e.target.value[1] !== ".") {
                  setBet(e.target.value[1]);
                } else {
                  setBet(e.target.value);
                }

                setError("");
              }
            }}
            type="number"
            className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-ls xl:text-xl pl-4  py-2 outline-0  "
            placeholder="bet"
          />
        </div>
        <div
          className="w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center bg-[#F2F2F2] text-black"
          onClick={() => {
            setBet((10 / currency?.current_price).toFixed(10));
            setError("");
          }}
        >
          min
        </div>
        <div
          className="w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center bg-[#F2F2F2] text-black"
          onClick={() => {
            if (currentAccount.currentMoney < 100000) {
              setBet(
                (currentAccount.currentMoney / currency?.current_price).toFixed(
                  14
                )
              );
              setError("");
            } else {
              setBet((100000 / currency?.current_price).toFixed(10));
              setError("");
            }
          }}
        >
          max
        </div>
      </div>
      {error && <p className="text-[10px] text-red-400 mt-1">{error}</p>}
      <div className="flex w-full flex-col gap-4 mt-6">
        <h2 className="text-[#F2F2F2] opacity-60">Number of bets</h2>
        <div className="flex gap-4 w-full justify-center">
          <div
            onClick={() => {
              setNumBets(10);
              setAutoNum(10);
            }}
            className={`w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center ${
              autoNum === 10
                ? "bg-black text-white border-[1px]"
                : "bg-[#F2F2F2] text-black"
            }  hover:bg-black hover:text-[#F2F2F2] hover:border-[1px]`}
          >
            10
          </div>
          <div
            onClick={() => {
              setNumBets(20);
              setAutoNum(20);
            }}
            className={`w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center ${
              autoNum === 20
                ? "bg-black text-white border-[1px]"
                : "bg-[#F2F2F2] text-black"
            }  hover:bg-black hover:text-[#F2F2F2] hover:border-[1px]`}
          >
            20
          </div>
          <div
            onClick={() => {
              setNumBets(50);
              setAutoNum(50);
            }}
            className={`w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center ${
              autoNum === 50
                ? "bg-black text-white border-[1px]"
                : "bg-[#F2F2F2] text-black"
            }  hover:bg-black hover:text-[#F2F2F2] hover:border-[1px]`}
          >
            50
          </div>
          <div
            onClick={() => {
              setNumBets(100);
              setAutoNum(100);
            }}
            className={`w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center ${
              autoNum === 100
                ? "bg-black text-white border-[1px]"
                : "bg-[#F2F2F2] text-black"
            }  hover:bg-black hover:text-[#F2F2F2] hover:border-[1px]`}
          >
            100
          </div>

          <div
            onClick={() => setNumBets(0)}
            className="w-10 h-10 text-base cursor-pointer font-light rounded-full flex items-center justify-center bg-black text-white hover:bg-white hover:text-black hover:border-[1px]"
          >
            <GiStopSign size={40} />
          </div>
        </div>
      </div>
      {numBets > 0 && (
        <h2 className="mt-6 text-center text-lg">bets remaining : {numBets}</h2>
      )}
    </div>
  );
};

export default BettingAuto;
