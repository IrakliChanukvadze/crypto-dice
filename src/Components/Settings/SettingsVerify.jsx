import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { settingsVerifyData } from "../../Data";

const SettingsVerify = () => {
  const { Countries, currentAccount, setCurrentAccount } = useContext(Context);
  const [settingsVerify, setSettingsVerify] = useState({
    ...currentAccount.settings.verify,
  });
  const [val, setVal] = useState(currentAccount.settings.verify.country);
  const [gender, setGender] = useState(currentAccount.settings.verify.gender);
  const handleVerifyChange = (e) => {
    const { name, value } = e.target;
    setSettingsVerify((prev) => ({ ...prev, [name]: value }));
  };

  const hanldeFormSave = () => {
    setCurrentAccount((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          from: "administration",
          message: "Your Personal information have been updated",
        },
      ],
      settings: { ...prev.settings, verify: { ...settingsVerify } },
    }));
  };

  return (
    <div>
      {settingsVerifyData.map((item) => (
        <div key={item.name}>
          <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[4px] md:mb-[8px] xl:text-xl mt-4">
            {item.title}
          </p>

          <input
            type={item.type || "text"}
            min={item.min || ""}
            max={item.min || ""}
            name={item.name}
            value={settingsVerify[item.name]}
            onChange={handleVerifyChange}
            className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D]  text-xl xl:text-2xl py-2 outline-0"
            placeholder={item.placeholder}
          />
          <p className="text-[10px] text-red-400 mt-1"></p>
        </div>
      ))}
      <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[4px] md:mb-[8px] xl:text-xl mt-4">
        Your Age
      </p>
      <input
        type="date"
        name="birthday"
        max="2005-01-02"
        value={settingsVerify.birthday}
        onChange={handleVerifyChange}
        className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D]  text-xl xl:text-2xl py-2 outline-0"
      />
      <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[4px] md:mb-[8px] xl:text-xl mt-4">
        Gender
      </p>
      <Select
        name="gender"
        value={currentAccount.settings.verify.gender || gender}
        disableUnderline={true}
        variant="standard"
        MenuProps={{
          PaperProps: {
            sx: {
              height: "180px",
              backgroundColor: "#5A5A5A",
              "& .MuiMenuItem-root": {
                padding: 1,
              },
            },
          },
        }}
        sx={{
          width: "100%",
          borderBottom: "1px solid #8D8D8D",
          backgroundColor: "#414141",
          marginTop: "16px",
        }}
        onChange={handleVerifyChange}
      >
        <MenuItem value={"male"} onClick={(e) => setGender("male")}>
          <h2 className="text-white">male</h2>
        </MenuItem>
        <MenuItem
          value={"female"}
          onClick={() => {
            setGender("female");
          }}
        >
          <h2 className="text-white">female</h2>
        </MenuItem>
      </Select>
      <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[4px] md:mb-[8px] xl:text-xl mt-4">
        Country
      </p>
      <Select
        name="country"
        value={val}
        disableUnderline={true}
        variant="standard"
        MenuProps={{
          PaperProps: {
            sx: {
              height: "180px",
              backgroundColor: "#5A5A5A",
              "& .MuiMenuItem-root": {
                padding: 1,
              },
            },
          },
        }}
        sx={{
          width: "100%",
          borderBottom: "1px solid #8D8D8D",
          backgroundColor: "#414141",
          marginTop: "16px",
        }}
        onChange={handleVerifyChange}
      >
        {Countries.map((item) => (
          <MenuItem key={item.name.official} value={item.name.official}>
            <h2 className="text-white">{item.name?.official}</h2>
          </MenuItem>
        ))}
      </Select>
      <div className="flex justify-center mt-4">
        <button
          onClick={hanldeFormSave}
          className="py-2 px-8 bg-[#272727] text-white font-bold tracking-[2px] text-lg md:text-2xl"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SettingsVerify;
