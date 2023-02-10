import axios from "axios";
import React, { useState, useEffect } from "react";
import useModalOpener from "../Hooks/useModalOpener";

const Context = React.createContext();

function ContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [currentAccount, setCurrentAccount] = useState({
    email: "irakli@g.g",
    joinData: "8/2/2023",
    depositMoney: 10000,
    currentMoney: 10001,
    totalWin: 120,
    totalLoose: 50,
    totalBets: 20,
    password: "irakli@g.g",
    userName: "irakli@g.g",
    messages: [
      {
        from: "administration",
        message: "welcome on crypto dice, wish you all the luck",
      },
    ],
    settings: {
      account: {
        presence: false,
        showBallance: false,
        marketing: true,
        incomingTips: false,
        messages: false,
      },
      verify: {
        idNumber: "112",
        firstName: "222",
        lastName: "zzz",
        country: "",
        birthday: "",
        gender: "male",
      },
    },
  });
  const [trendingCoins, setTrendingCoins] = useState();
  const [rendering, setRendering] = useState(true);
  const [currency, setCurrency] = useState();
  const [settingOpen, handleSettingOpen, handleSettingClose] = useModalOpener();
  const [myInfoOpen, handleMyInfoOpen, handleMyInfoClose] = useModalOpener();
  const [walletOpen, handleWalletOpen, handleWalletClose] = useModalOpener();
  const [Countries, setCountries] = useState("");

  useEffect(() => {
    if (rendering) {
      (async () => {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
        );
        setTrendingCoins(data);
        setRendering(false);
        setCurrency(data[0]);
      })();
      (async () => {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(data);
      })();
    }
  }, []);

  const checkIfLoginTrue = (email, password) => {
    const emailFound = users.find((item) => item.email === email);
    if (emailFound) {
      if (emailFound.password === password) {
        setCurrentAccount(emailFound);
        return;
      }
      return "password didn't match";
    }
    return "email haven't found";
  };

  return (
    <Context.Provider
      value={{
        setUsers,
        users,
        checkIfLoginTrue,
        currentAccount,
        setCurrentAccount,
        trendingCoins,
        currency,
        setCurrency,
        settingOpen,
        handleSettingOpen,
        handleSettingClose,
        Countries,
        myInfoOpen,
        handleMyInfoOpen,
        handleMyInfoClose,
        walletOpen,
        handleWalletOpen,
        handleWalletClose,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
