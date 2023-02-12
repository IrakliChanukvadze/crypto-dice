import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { responsiveCont } from "../Styles";
import AccountMenu from "./AccountMenu";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
import { navListData } from "../Data";
import useModalOpener from "../Hooks/useModalOpener";

const Nav = () => {
  const { currentAccount } = useContext(Context);
  const [regOpen, handleRegOpen, handleRegClose] = useModalOpener();
  const [logOpen, handleLogOpen, handleLogClose] = useModalOpener();

  const [success, setSuccess] = useState(false);

  return (
    <div className="bg-[#000000] text-white border-b-2 border-b-[#F2F2F2] w-full fixed z-50">
      <RegistrationModal
        open={regOpen}
        handleClose={handleRegClose}
        success={success}
        setSuccess={setSuccess}
      />
      <LoginModal open={logOpen} handleClose={handleLogClose} />
      <div className={`${responsiveCont} flex justify-between items-center`}>
        <Link to="/">
          <h2 className="sm:text-2xl text-#F2F2F2 font-bold md:text-4xl hover:text-[#1D84E2] cursor-pointer hidden sm:block">
            Cryptoid
          </h2>
        </Link>
        <div className="flex items-center justify-center gap-4 xs:gap-6 md:gap-12  xl:gap-16 my-4 mx-auto sm:mx-0">
          <div className="hidden xl:flex items-center gap-16">
            {navListData.map((item) => (
              <Link to={item.link} key={item.title}>
                <h2 className="cursor-pointer hover:text-[#1D84E2] ">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
          {!currentAccount && (
            <button
              className="bg-[#272727] text-[#F2F2F2] font-bold rounded-full border-2 border-black px-4 md:px-5 py-2 hover:bg-transparent hover:border-[#1D84E2]  hover:text-[#1D84E2]"
              onClick={handleLogOpen}
            >
              Log in
            </button>
          )}
          {!currentAccount ? (
            <button
              className="text-[#1D84E2] font-bold rounded-full px-4 md:px-5 py-2 bg-transparent border-[#1D84E2] border-2 hover:border-black hover:bg-[#272727] hover:text-[#F2F2F2]"
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
