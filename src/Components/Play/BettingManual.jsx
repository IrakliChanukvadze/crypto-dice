import React from "react";

const BettingManual = ({ props }) => {
  const { currency, error, setBet, setError, bet, currentAccount, start } =
    props;

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
              setBet((100000 / currency?.current_price).toFixed(14));
              setError("");
            }
          }}
        >
          max
        </div>
      </div>
      {error && <p className="text-[10px] text-red-400 mt-1">{error}</p>}
      <div className="flex justify-center w-full mt-6">
        <button
          className="bg-[#CEFE02] rounded-xl text-black w-32 py-1 font-bold"
          onClick={start}
        >
          Bet
        </button>
      </div>
    </div>
  );
};

export default BettingManual;
