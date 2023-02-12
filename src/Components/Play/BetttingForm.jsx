import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import BettingAuto from "./BettingAuto";
import BettingManual from "./BettingManual";

const BetttingForm = ({ props }) => {
  const {
    bettingManual,
    setBettingManual,
    currency,
    error,
    setBet,
    setError,
    bet,
    currentAccount,
    setResult,
    multiplier,
    result,
    betValue,
    setCurrentAccount,
    type,
    setWin,
  } = props;
  //   const { setCurrentAccount } = useContext(Context)
  //   console.log(currentAccount);
  const [numBets, setNumBets] = useState("");
  const start = () => {
    if (bet) {
      setResult((Math.random() * 100).toFixed(3));
    } else {
      setError("please set bet ammount");
    }
  };

  useEffect(() => {
    const betInUsd = bet * currency?.current_price;
    if (betInUsd > currentAccount?.currentMoney) {
      setError("Not enough on ballance");
      console.log("entered");
      setNumBets(0);
    } else if (result) {
      const d = new Date();
      let day = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();
      let hour = d.getHours();
      let minutes = d.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      setCurrentAccount((prev) => {
        if (result > betValue && type === "over") {
          setWin(true);
          return {
            ...prev,
            totalBets: prev?.totalBets + 1,
            bets: [
              {
                id: prev?.betsId,
                result: "win",
                amount: bet,
                img: currency?.image,
                payout: (bet * multiplier)?.toFixed(10),
                date: `${hour}:${minutes} ${day}/${month + 1}/${year}`,
              },
              ...prev?.bets,
            ],
            betsId: prev?.betsId + 1,
            totalWin:
              prev?.totalWin + bet * (multiplier - 1) * currency?.current_price,
            currentMoney:
              prev?.currentMoney +
              bet * (multiplier - 1) * currency?.current_price,
          };
        } else if (result < betValue && type === "less") {
          setWin(true);
          return {
            ...prev,
            betsId: prev?.betsId + 1,
            bets: [
              {
                id: prev?.betsId,
                result: "win",
                amount: bet,
                img: currency?.image,
                payout: bet * multiplier,
                date: `${hour}:${minutes} ${day}/${month + 1}/${year}`,
              },
              ...prev?.bets,
            ],
            totalBets: prev?.totalBets + 1,
            totalWin:
              prev?.totalWin + bet * (multiplier - 1) * currency?.current_price,
            currentMoney:
              prev?.currentMoney +
              bet * (multiplier - 1) * currency?.current_price,
          };
        } else {
          setWin(false);
          return {
            ...prev,
            betsId: prev?.betsId + 1,
            bets: [
              {
                id: prev?.betsId,
                result: "loose",
                amount: bet,
                img: currency?.image,
                payout: 0,
                date: `${hour}:${minutes} ${day}/${month + 1}/${year}`,
              },
              ...prev?.bets,
            ],
            totalBets: prev?.totalBets + 1,
            totalLoose: prev?.totalLoose + bet * currency?.current_price,
            currentMoney: prev?.currentMoney - bet * currency?.current_price,
          };
        }
      });
    }
  }, [result]);
  return (
    <div className="w-full md:w-[32%] bg-[#000] h-full py-4 ">
      <div className="w-[94%] m-auto   border-white px-2 ">
        <div className="flex gap-4 py-6">
          <div
            onClick={() => {
              setBettingManual(true);
              setNumBets(0);
            }}
            className={`w-[50%] py-2 rounded-xl flex items-center justify-center ${
              bettingManual
                ? "bg-white  text-black"
                : "bg-black border-white border-[1px] text-[#F2F2F2]"
            } `}
          >
            Manual
          </div>
          <div
            onClick={() => {
              setBettingManual(false);
            }}
            className={`w-[50%] py-2 rounded-xl flex items-center justify-center ${
              bettingManual
                ? "bg-black border-white border-[1px] text-[#F2F2F2]"
                : "bg-white  text-black"
            } `}
          >
            Auto
          </div>
        </div>
        {bettingManual ? (
          <BettingManual
            props={{
              currency,
              error,
              setBet,
              setError,
              bet,
              currentAccount,
              start,
            }}
          />
        ) : (
          <BettingAuto
            props={{
              currency,
              error,
              setBet,
              setError,
              bet,
              currentAccount,
              start,
              numBets,
              setNumBets,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BetttingForm;
