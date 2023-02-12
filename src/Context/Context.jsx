import axios from "axios";
import React, { useState, useEffect } from "react";
import useModalOpener from "../Hooks/useModalOpener";

const Context = React.createContext();

function ContextProvider(props) {
  const [users, setUsers] = useState(
    localStorage.users ? JSON.parse(localStorage.users) : []
  );
  const [currentAccount, setCurrentAccount] = useState();
  const [trendingCoins, setTrendingCoins] = useState();
  const [rendering, setRendering] = useState(true);
  const [currency, setCurrency] = useState();
  const [settingOpen, handleSettingOpen, handleSettingClose] = useModalOpener();
  const [myInfoOpen, handleMyInfoOpen, handleMyInfoClose] = useModalOpener();
  const [walletOpen, handleWalletOpen, handleWalletClose] = useModalOpener();
  const [vaultOpen, handleVaultOpen, handleVaultClose] = useModalOpener();
  const [betInfoOpen, handleBetInfoOpen, handleBetInfoClose] = useModalOpener();
  const [transactionsOpen, handleTransactionsOpen, handleTransactionsClose] =
    useModalOpener();
  const [Countries, setCountries] = useState("");

  useEffect(() => {
    if (currentAccount?.length > 64) {
      setCurrentAccount((prev) => ({
        ...prev,
        transactions: prev?.transactions?.slice(0, 64),
      }));
    }
  }, [currentAccount?.transactions?.length]);

  useEffect(() => {
    if (currentAccount?.bets?.length > 64) {
      setCurrentAccount((prev) => ({
        ...prev,
        bets: prev?.bets?.slice(0, 64),
      }));
    }
  }, [currentAccount?.bets?.length]);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    if (currentAccount) {
      setUsers((prev) => {
        return prev?.map((item) => {
          if (item.email === currentAccount.email) {
            return { ...currentAccount };
          } else return { ...item };
        });
      });
    }
  }, [
    currentAccount?.currentMoney,
    currentAccount?.vaultBallance,
    currentAccount?.twoStepAuthentikation,
    currentAccount?.password,
    currentAccount?.transactions?.length,
    currentAccount?.settings?.account?.incomingTips,
    currentAccount?.settings?.account?.marketing,
    currentAccount?.settings?.account?.messages,
    currentAccount?.settings?.account?.presence,
    currentAccount?.settings?.account?.showBallance,
    currentAccount?.settings?.verify?.birthday,
    currentAccount?.settings?.verify?.country,
    currentAccount?.settings?.verify?.firstName,
    currentAccount?.settings?.verify?.gender,
    currentAccount?.settings?.verify?.lastName,
    currentAccount?.settings?.verify?.idNumber,
  ]);

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
        vaultOpen,
        handleVaultOpen,
        handleVaultClose,
        transactionsOpen,
        handleTransactionsOpen,
        handleTransactionsClose,
        betInfoOpen,
        handleBetInfoOpen,
        handleBetInfoClose,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
