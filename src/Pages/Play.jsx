import React, { useContext, useState } from "react";
import { responsiveCont } from "../Styles";
import { Context } from "../Context/Context";
import BetttingForm from "../Components/Play/BetttingForm";
import PlayGround from "../Components/Play/PlayGround";
import BetsTable from "../Components/Play/BetsTable";

const Play = () => {
  const { currentAccount, currency, setCurrentAccount } = useContext(Context);
  const [betValue, setBetValue] = useState(50);
  const [type, setType] = useState("over");
  const [bet, setBet] = useState(0.1);
  const [bettingManual, setBettingManual] = useState(false);
  const [error, setError] = useState("");
  const [multiplier, setMultiplier] = useState((98.5 / betValue).toFixed(3));
  const [result, setResult] = useState(false);

  const [win, setWin] = useState(true);

  return (
    <div className="bg-[#272727] pt-80 md:pt-24 min-h-[90vh]">
      <div
        className={`${responsiveCont} mt-12  text-white flex flex-col-reverse relative  items-center  justify-between md:flex-row h-96`}
      >
        <BetttingForm
          props={{
            type,
            betValue,
            bettingManual,
            setBettingManual,
            currency,
            error,
            setBet,
            setError,
            bet,
            currentAccount,
            setCurrentAccount,
            setResult,
            multiplier,
            result,
            setWin,
          }}
        />

        <PlayGround
          props={{
            betValue,
            multiplier,
            type,
            setMultiplier,
            setType,
            result,
            setBetValue,
            win,
          }}
        />
      </div>
      <BetsTable props={{ currentAccount }} />
    </div>
  );
};

export default Play;
