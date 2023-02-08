import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { CgProfile } from "react-icons/cg";
import { accountMenuData } from "../Data";
import { Context } from "../Context/Context";
import profile from "../assets/profile-avatar.png";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const { currentAccount } = useContext(Context);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="basic-button" onClick={handleClick}>
        <CgProfile size={25} className="text-white" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { backgroundColor: "#5A5A5A" } }}
      >
        <div className="w-44 bg-[#5A5A5A] rounded-[13px] flex flex-col gap-4 py-2">
          <div className="flex text-white justify-between w-[88%] m-auto border-b-8 border-b-[rgba(20, 20, 20, 0.2)] cursor-pointer hover:text-orange-500 pb-2">
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
              className="flex text-white justify-between w-[88%] m-auto border-b-2 border-b-[rgba(217, 217, 217, 0.5)] cursor-pointer hover:text-orange-500"
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
