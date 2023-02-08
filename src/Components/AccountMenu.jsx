import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { CgProfile } from "react-icons/cg";
import { accountMenuData } from "../Data";
import { Context } from "../Context/Context";
import profile from "../assets/profile-avatar.png";
import { FormControl, MenuItem, Select } from "@mui/material";
import { BsArrowDownCircle } from "react-icons/bs";
import { SlWallet } from "react-icons/sl";

const AccountMenu = () => {
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
    <div className="flex gap-0 items-center">
      <div className="border-2 flex gap-4 items-center rounded-full">
        <FormControl>
          <Select
            name="currency"
            value={selectData}
            sx={{
              "&.Mui-focused": {
                border: "0px solid primary",
                borderRadius: "200px",
              },
            }}
            // State	Global class name
            // active	.Mui-active
            // checked	.Mui-checked
            // completed	.Mui-completed
            // disabled	.Mui-disabled
            // error	.Mui-error
            // expanded	.Mui-expanded
            // focus visible	.Mui-focusVisible
            // focused	.Mui-focused
            // required	.Mui-required
            // selected	.Mui-selected
            onChange={(e) => {
              setCurrency(
                trendingCoins.find((item) => item.id === e.target.value)
              );
              setSelectData(e.target.value);
              console.log(trendingCoins[0].id);
              console.log(e.target.value);
              console.log(currency?.id, "id");
              console.log(trendingCoins[0].id === e.target.value);
            }}
          >
            {trendingCoins?.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id}
                sx={{
                  backgroundColor: "#5A5A5A",
                  "&.Mui-selected": {
                    backgroundColor: "#5A5A5A",
                    paddingTop: "10px",
                  },
                }}
              >
                <div className="text-white hover:text-[#1D84E2]  flex items-center gap-2">
                  <img src={item.image} className="w-8 h-8" />
                  {(currentAccount?.money / item?.current_price).toFixed(12)}
                  <BsArrowDownCircle size={25} />
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="w-12 h-12 bg-[#EFD26E] rounded-full flex items-center justify-center">
          <SlWallet size={25} className="text-black" />
        </div>
      </div>
      <Button id="basic-button" onClick={handleClick}>
        <CgProfile size={25} className="text-white hover:text-[#1D84E2]" />
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

          {accountMenuData.map(({ name, icon }) => (
            <div
              key={name}
              className="flex text-white hover:text-[#1D84E2] justify-between w-[88%] m-auto border-b-2 border-b-[rgba(217, 217, 217, 0.5)] cursor-pointer "
            >
              <h2>{name}</h2>
              {icon}
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default AccountMenu;
