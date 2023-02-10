import React, { useState, useEffect, useContext } from "react";
import { useForm, useWatch, useFormState } from "react-hook-form";
import { Switch } from "@mui/material";
import { Context } from "../../Context/Context";
import { TfiEye } from "react-icons/tfi";
import { settingsAccount } from "../../Data";

const Controller = ({ control, name, rules, register, render }) => {
  const value = useWatch({
    control,
    name,
  });

  const { errors } = useFormState({
    control,
    name,
  });
  const props = register(name, rules);
  return render({
    value,
    onChange: (e) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

const Input = (props) => {
  const [value, setValue] = React.useState(props.value || "");

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <input
      className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D]  text-xl xl:text-2xl  py-2 outline-0"
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
};

function App() {
  const { currentAccount, setCurrentAccount } = useContext(Context);
  const [show, setShow] = useState(false);
  const [settingsForm, setSettingsForm] = useState(
    currentAccount?.settings?.account
  );

  const handleSettingsChange = (e) => {
    const { name, checked } = e.target;
    setSettingsForm((prev) => ({ ...prev, [name]: checked }));
  };

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" } });

  useEffect(() => {
    setValue("email", currentAccount?.email);
  }, []);
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit((data) => {
          if (data.password) {
            setCurrentAccount((prev) => ({
              ...prev,
              password: data.password,
              messages: [
                ...prev.messages,
                {
                  from: "administration",
                  message: "Your Password has been updated",
                },
              ],
              settings: { ...prev.settings, account: { ...settingsForm } },
            }));
          } else if (data.email !== currentAccount.email) {
            setCurrentAccount((prev) => ({
              ...prev,
              email: data.email,
              messages: [
                ...prev.messages,
                {
                  from: "administration",
                  message: "Your email has been updated",
                },
              ],
              settings: { ...prev.settings, account: { ...settingsForm } },
            }));
          } else {
            setCurrentAccount((prev) => ({
              ...prev,
              messages: [
                ...prev.messages,
                {
                  from: "administration",
                  message: "Your account settings has been updated ",
                },
              ],
              settings: { ...prev.settings, account: { ...settingsForm } },
            }));
          }
        })}
      >
        <p className=" text-[12px]  leading-3 md:text-xl opacity-50 mb-[6px] md:mb-[9px] xl:text-2xl tracking-[3px]">
          Current Email
        </p>
        <Controller
          {...{
            control,
            register,
            name: "email",
            rules: {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            },
            render: (props) => <Input {...props} />,
          }}
        />
        <p className="text-[10px] text-red-400 mt-2">
          {errors?.email?.message}
        </p>

        <p className="text-[12px] leading-3 md:text-xl  xl:text-2xl opacity-50 mb-[6px] md:mb-[9px] mt-4 md:mt-6 tracking-[3px]">
          New Password
        </p>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="w-full ">
              <input
                type={show ? "text" : "password"}
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "min length is 8",
                  },
                })}
                className="w-full bg-transparent border-b-[1px] border-b-[#8D8D8D] text-xl xl:text-2xl  py-2 outline-0 "
                placeholder="Password"
              />
            </div>

            <p className="text-[10px] text-red-400 mt-2">
              {errors?.password?.message}
            </p>
          </div>
          <div
            className=" bg-transparent target w-10 h-10 border-[1px] border-white rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            <TfiEye size={25} />
          </div>
        </div>
        <p className="text-[12px] leading-3 md:text-xl xl:text-2xl opacity-50 mb-[6px] md:mb-[9px] mt-4 md:mt-6 tracking-[3px] ">
          Privacy
        </p>
        {settingsAccount.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center mt-2"
          >
            <h2 className="flex-1 ">{item.title}</h2>
            <Switch
              name={item.name}
              checked={settingsForm[item.name]}
              onChange={(e) => handleSettingsChange(e)}
              color="success"
            />
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="py-2 px-8 bg-[#272727] text-white font-bold tracking-[2px] text-lg md:text-2xl"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
