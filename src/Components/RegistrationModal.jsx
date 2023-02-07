import { Modal, Checkbox } from "@mui/material";
import React, { useState, useContext } from "react";
import { Context } from "../Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import GoogleImg from "../assets/Google__G__Logo.svg.png";
import FacebookImg from "../assets/Facebook_f_Logo_(2019).svg.png";
import { useForm } from "react-hook-form";
import { BsCheckCircle, BsCircleFill } from "react-icons/bs";

const RegistrationModal = ({ open, handleClose, success, setSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const { setUsers, users } = useContext(Context);

  return (
    <Modal open={open} onClose={handleClose}>
      {success ? (
        <div
          className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white h-28 w-auto m-auto px-10 flex items-center justify-center`}
        >
          <h2>your account successfully have been registered</h2>
        </div>
      ) : (
        <div
          className={`absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#414141] text-white pb-8 w-[90vw] max-w-[700px] m-auto `}
        >
          <div className="w-full bg-[#272727]  ">
            <div className="flex justify-between h-10 md:h-14 bg-[#272727] items-center  w-[94%] m-auto text-base md:text-xl">
              <h2>Register</h2>
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
            <h2 className="flex flex-col md:flex-row md:gap-[12px] uppercase text-2xl md:text-4xl my-5 md:my-7 xl:text-5xl ">
              Register into
              <span className="text-[#CEFE02]">Cryptodice</span>
            </h2>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(errors);
                if (errors) {
                  setUsers((prev) => [
                    ...prev,
                    {
                      email: data.email,
                      password: data.password,
                      userName: data.name,
                    },
                  ]);
                  reset({
                    email: "",
                    password: "",
                  });
                  setSuccess(true);
                }
              })}
            >
              <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[4px] md:mb-[8px] xl:text-xl">
                Email <span className="text-white  text-2xl">*</span>
              </p>

              <input
                type="text"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D]  text-xl xl:text-2xl pl-4 py-2 outline-0"
                placeholder="Email"
              />
              <p className="text-[10px] text-red-400 mt-1">
                {errors?.email?.message}
              </p>
              <p className=" text-[12px] leading-3 md:text-base opacity-50 mb-[4px] md:mb-[8px] xl:text-xl mt-6 md:mt-8">
                UserName <span className="text-white  text-2xl">*</span>
              </p>

              <input
                type="name"
                {...register("name", {
                  required: "required",
                })}
                className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D]  text-xl xl:text-2xl pl-4 py-2 outline-0"
                placeholder="username"
              />
              <p className="text-[10px] text-red-400 mt-1">
                {errors?.name?.message}
              </p>
              <p className="text-[12px] leading-3 md:text-base  xl:text-xl opacity-50 mb-[4px] md:mb-[8px] mt-6 md:mt-8 ">
                Password <span className="text-white  text-2xl">*</span>
              </p>
              <div className="relative w-full ">
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: "required",
                    minLength: {
                      value: 8,
                      message: "min length is 8",
                    },
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
              <p className="text-[10px] text-red-400 mt-1">
                {errors?.password?.message}
              </p>
              <div className="flex gap-2 mb-4 md:mb-5 mt-6 md:mt-8">
                <Checkbox
                  {...register("checkbox", {
                    required: "required",
                  })}
                  icon={<BsCircleFill size={20} />}
                  checkedIcon={
                    <BsCheckCircle
                      size={20}
                      className="text-[#EFD26E] font-bold"
                    />
                  }
                />
                <p className="text-[12px] leading-3 xl:text-[18px] xl:leading-[18px] text-[#8D8D8D]   w-[90%] ">
                  I agree to the collection of information in cookies, I agree
                  with Privacy Policy and with Terms of Use, Gambling isn't
                  forbidden by my local authorities and I'm at least 18 years
                  old.
                </p>
              </div>
              <p className="text-[10px] text-red-400 mt-1 ">
                {errors?.checkbox?.message}
              </p>
              <button
                type="submit"
                className="w-[120px] md:w-[160px] h-10 md:h-[40px] flex justify-center items-center bg-black m-auto font-bold text-[14px] leading-[14px] md:text-lg rounded-[10px] mt-4 md:mt-5 mb-5 md:mb-7"
              >
                Sign up
              </button>
            </form>
            <hr className="h-[1px] bg-[#E1E1E1]" />
            <div className="flex gap-[10px] xl:gap-4 flex-col xl:flex-row mt-[8px]">
              <div className="flex items-center justify-between px-4 py-4 bg-white text-black text-xl rounded-[14px]  cursor-pointer w-full">
                <h3 className="text-base md:text-xl">Continue with Google</h3>
                <img src={GoogleImg} className="w-6 md:w-8 h-auto" />
              </div>
              <div className="flex items-center justify-between px-4 py-4 bg-[#3A559F]   rounded-[14px]  cursor-pointer w-full">
                <h3 className="text-base md:text-xl">Continue with Facebook</h3>
                <img src={FacebookImg} className="w-6 md:w-8 h-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RegistrationModal;
