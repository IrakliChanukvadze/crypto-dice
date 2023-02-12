import { Slider } from "@mui/material";
import React from "react";
import { purple } from "@mui/material/colors";

const PlayGround = ({ props }) => {
  const {
    betValue,
    multiplier,
    type,
    setBetValue,
    setMultiplier,
    setType,
    result,
    win,
  } = props;

  return (
    <div className="w-full md:w-[62%] bg-[#000] pt-10 pb-6 relative flex flex-col-reverse md:flex-col justify-between gap-12 h-full">
      <Slider
        size="medium"
        min={0}
        max={100}
        marks
        step={0.1}
        value={betValue}
        color={type === "over" ? "primary" : "secondary"}
        onChange={(event, newValue) => {
          if (newValue > 2.99 && newValue < 97.1) {
            setBetValue(newValue);
            if (type === "over") {
              setMultiplier((0.985 * (100 / (100 - betValue)))?.toFixed(3));
            } else {
              setMultiplier((0.985 * (100 / betValue))?.toFixed(3));
            }
          }
        }}
        valueLabelDisplay="on"
        sx={{
          height: "15px",
          width: "94%",
          margin: "auto",
          maxWidth: "600px",
          "& .MuiSlider-rail": {
            color: type === "over" ? "#00FF22" : "#FF0000",
          },
          "& .MuiSlider-thumb": {
            color: "#fff",
            height: "30px",
            width: "30px",
          },
          "& .MuiSlider-track": {
            color: type === "over" ? "#FF0000" : "#00FF22",
          },
        }}
      />

      <h2
        className={`text-2xl ${
          win ? "text-[#00FF22]" : "text-[#FF0000]"
        } tracking-[2px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
      >
        {result}
      </h2>

      <div className="w-[94%] max-w-[600px] m-auto bg-[#E1E1E1] h-20 sm:h-24 relative rounded-full flex items-center justify-center border-2 border-red-400">
        <div className="text-black flex gap-3 sm:gap-8 justify-center">
          <div>
            <h2 className="border-b-[1px] border-b-black font-normal opacity-40 text-[16px] sm:text-[20px]">
              Win Chance
            </h2>
            <h2 className="font-bold text-[16px] sm:text-[20px]">
              {type === "over"
                ? (100 - betValue)?.toFixed(1)
                : betValue?.toFixed(1)}
              %
            </h2>
          </div>
          <div>
            <h2 className="border-b-[1px] border-b-black font-normal opacity-40 text-[16px] sm:text-[20px]">
              Multiplier
            </h2>
            <h2 className="font-bold text-[16px] sm:text-[20px]">
              {multiplier}
            </h2>
          </div>
        </div>
        <div
          onClick={() => {
            setType("over");
            setMultiplier((0.985 * (100 / (100 - betValue)))?.toFixed(3));
          }}
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full absolute left-2 top-2  border-[1px] flex  items-center justify-center ${
            type === "over"
              ? "bg-black border-[1px]  text-[#F2F2F2]"
              : "bg-white border-black text-black"
          } `}
        >
          <h5 className="text-base flex gap-[2px]">
            <span className="hidden sm:block">Roll</span> Over
          </h5>
        </div>
        <div
          onClick={() => {
            setType("less");
            setMultiplier((0.985 * (100 / betValue))?.toFixed(3));
          }}
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full absolute right-2  top-2 border-[1px] flex  items-center justify-center ${
            type === "less"
              ? "bg-black border-[1px]  text-[#F2F2F2]"
              : "bg-white border-black text-black"
          } `}
        >
          {" "}
          <h5 className="text-[16px] flex gap-[2px]">
            <span className="hidden sm:block">Roll</span> Under
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
