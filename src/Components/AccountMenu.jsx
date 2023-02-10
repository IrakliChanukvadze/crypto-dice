import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { CgProfile } from "react-icons/cg";
import { accountMenu } from "../Data";
import { Context } from "../Context/Context";
import profile from "../assets/profile-avatar.png";
import { FormControl, MenuItem, Select } from "@mui/material";
import { BsArrowDownCircle } from "react-icons/bs";
import { SlWallet } from "react-icons/sl";

const AccountMenu = () => {
  const accountMenuData = accountMenu();
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const { currentAccount, trendingCoins, currency, setCurrency } =
    useContext(Context);
  const [selectData, setSelectData] = useState("bitcoin");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex gap-0 items-center ">
      {!currentAccount?.settings?.account?.showBallance && (
        <div className="border-2 flex gap-4 items-center rounded-full relative pl-2">
          <FormControl>
            <Select
              name="currency"
              value={selectData}
              disableUnderline={true}
              variant="standard"
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#5A5A5A",
                  },
                },
              }}
              sx={{
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
              onChange={(e) => {
                setCurrency(
                  trendingCoins.find((item) => item.id === e.target.value)
                );
                setSelectData(e.target.value);
              }}
            >
              {trendingCoins?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  <div className="text-white hover:text-[#1D84E2]  flex items-center gap-2">
                    <img src={item.image} className="w-8 h-8" />
                    {(
                      currentAccount?.currentMoney / item?.current_price
                    ).toFixed(12)}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="w-12 h-12 bg-[#EFD26E] rounded-full flex items-center justify-center">
            <SlWallet size={25} className="text-black" />
          </div>
        </div>
      )}
      <Button id="basic-button" onClick={handleClick}>
        <CgProfile
          size={35}
          className="text-white hover:text-[#1D84E2] ml-4 xs:ml-6 md:ml-12 "
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { backgroundColor: "#5A5A5A", borderRadius: "10px" },
        }}
      >
        <div className="w-44 bg-[#5A5A5A] rounded-[13px] flex flex-col gap-4 py-2">
          <div className="flex text-white hover:text-[#1D84E2] justify-between w-[88%] m-auto border-b-8 border-b-[rgba(20, 20, 20, 0.2)] cursor-pointer ">
            <h2>Hi, {currentAccount.userName}</h2>
            <img
              src={profile}
              alt="profile-picture"
              className="w-6 h-6 rounded-full"
            />
          </div>

          {accountMenuData.map((item) => (
            <div
              key={item.name}
              className="flex text-white hover:text-[#1D84E2] justify-between w-[88%] m-auto border-b-2 border-b-[rgba(217, 217, 217, 0.5)] cursor-pointer "
            >
              <h2
                onClick={() => {
                  if (item?.onclick?.modal) {
                    item?.onclick?.modal();
                  }
                }}
              >
                {item.name}
              </h2>
              {item.icon}
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default AccountMenu;
