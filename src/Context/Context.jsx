import axios from "axios";
import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [currentAccount, setCurrentAccount] = useState({
    email: "irakli@g.g",
    joinData: "8 - 2 - 2023",
    money: 10000,
    password: "irakli@g.g",
    userName: "irakli@g.g",
  });
  const [trendingCoins, setTrendingCoins] = useState();
  const [rendering, setRendering] = useState(true);
  const [currency, setCurrency] = useState();

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
    }
  }, []);

  console.log(currency);

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
        trendingCoins,
        currency,
        setCurrency,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
