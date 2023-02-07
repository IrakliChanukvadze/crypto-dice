import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(false);
  const [currentAccount, setCurrentAccount] = useState();

  const checkIfLoginTrue = (email, password) => {
    console.log(email, "123");
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
  console.log(currentAccount);
  return (
    <Context.Provider
      value={{
        setUsers,
        users,
        checkIfLoginTrue,
        currentAccount,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
