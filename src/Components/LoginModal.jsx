import { Checkbox, Modal } from "@mui/material";
import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GoogleImg from "../assets/Google__G__Logo.svg.png";
import FacebookImg from "../assets/Facebook_f_Logo_(2019).svg.png";
import { useForm } from "react-hook-form";
import { Context } from "../Context/Context";

const LoginModal = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const { checkIfLoginTrue } = useContext(Context);

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-10 w-[90vw] max-w-[700px] m-auto `}
      >
        <div className="w-full bg-[#272727]  ">
          <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
            <h2>Login</h2>
            <AiOutlineClose
              size={20}
              className="cursor-pointer md:scale-125"
              onClick={() => {
                handleClose();
              }}
            />
          </div>
        </div>
        <div className="w-[94%] xl:w=auto m-auto">
          <h2 className="flex flex-col md:flex-row md:gap-[12px] uppercase text-2xl md:text-4xl my-8 md:my-12 xl:text-5xl flex-wrap ">
            Register into
            <span className="text-[#CEFE02]">Cryptodice</span>
          </h2>
          <form
            onSubmit={handleSubmit((data) => {
              checkIfLoginTrue(data.email, data.password);
              handleClose();
            })}
          >
            <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[10px] md:mb-[15px] xl:text-xl">
              Email
            </p>

            <input
              type="text"
              {...register("email", {
                required: "required",
              })}
              className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D]  text-xl xl:text-2xl pl-4 py-2 outline-0"
              placeholder="Email or Username"
            />
            <p className="text-[10px] text-red-400 mt-2">
              {errors?.email?.message}
            </p>
            <p className="text-[12px] leading-3 md:text-base  xl:text-xl opacity-50 mb-[10px] md:mb-[15px] mt-8 md:mt-12 ">
              Password
            </p>

            <div className="relative w-full ">
              <input
                type={show ? "text" : "password"}
                {...register("password", {
                  required: "required",
                })}
                className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl pl-4 py-2 outline-0 "
                placeholder="Password"
              />
              <h2
                className="absolute top-[50%] -translate-y-[50%] right-6 text-base opacity-50"
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              >
                {show ? "hide" : "show"}
              </h2>
            </div>
            <p className="text-[10px] text-red-400 mt-2">
              {errors?.password?.message}
            </p>

            <p className="text-[12px] w-auto inline-block leading-3 md:text-base  xl:text-xl opacity-50 mb-[10px] md:mb-[15px] mt-4 md:mt-6 cursor-pointer ">
              Forget password?
            </p>
            <button
              type="submit"
              className="w-[120px] md:w-[160px] h-10 md:h-[40px] flex justify-center items-center bg-black m-auto font-bold text-[14px] leading-[14px] md:text-lg rounded-[10px] mb-6 md:mb-9"
            >
              Log in
            </button>
          </form>
          <hr className="h-[1px] bg-[#E1E1E1]" />
          <div className="flex gap-[10px] xl:gap-5 flex-col xl:flex-row mt-[10px]">
            <div className="flex items-center justify-between px-4 py-6 bg-white text-black text-xl rounded-[14px]  cursor-pointer w-full">
              <h3 className="text-base md:text-xl">Continue with Google</h3>
              <img src={GoogleImg} className="w-6 md:w-8 h-auto" />
            </div>
            <div className="flex items-center justify-between px-4 py-6 bg-[#3A559F]   rounded-[14px]  cursor-pointer w-full">
              <h3 className="text-base md:text-xl">Continue with Facebook</h3>
              <img src={FacebookImg} className="w-6 md:w-8 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
