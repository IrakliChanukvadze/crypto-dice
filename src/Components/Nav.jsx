import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { responsiveCont } from "../Styles";
import AccountMenu from "./AccountMenu";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
import { navListData } from "../Data";

const Nav = () => {
  const { currentAccount } = useContext(Context);
  const [regOpen, setRegOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegOpen = () => {
    setRegOpen(true);
    setSuccess(false);
  };
  const handleRegClose = () => {
    setRegOpen(false);
  };
  const handleLogOpen = () => {
    setLogOpen(true);
  };
  const handleLogClose = () => {
    setLogOpen(false);
  };
  return (
    <div className="bg-[#000000] text-white border-b-2 border-b-[#F2F2F2] w-full m-auto fixed">
      <RegistrationModal
        open={regOpen}
        handleClose={handleRegClose}
        success={success}
        setSuccess={setSuccess}
      />
      <LoginModal open={logOpen} handleClose={handleLogClose} />
      <div className={`${responsiveCont} flex justify-between items-center`}>
        <h2 className="text-2xl text-#F2F2F2 font-bold md:text-4xl">
          Cryptoid
        </h2>
        <div className="flex align-middle gap-4 xs:gap-6 md:gap-12  xl:gap-16 my-4">
          <div className="hidden xl:flex items-center gap-16">
            {navListData.map((item) => (
              <Link to={item.link} key={item.title}>
                <h2 className="cursor-pointer ">{item.title}</h2>
              </Link>
            ))}
          </div>
          {!currentAccount && (
            <button
              className="bg-[#272727] text-[#F2F2F2] font-bold rounded-full px-4 md:px-5 py-2"
              onClick={handleLogOpen}
            >
              Log in
            </button>
          )}
          {!currentAccount ? (
            <button
              className="text-[#1D84E2] font-bold rounded-full px-4 md:px-5 py-2 bg-transparent border-[#1D84E2] border-2"
              onClick={handleRegOpen}
            >
              Sign up
            </button>
          ) : (
            <AccountMenu />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
