import React, { createContext, useState } from "react";
import App from "../App";
import Login from "../components/Login";
import User from "../components/User";


export const AppContext = createContext(null);

function Context() {
  const [username, setUsername] = useState("");

  return (
    <>
      <h1>Use Context</h1>

      <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
      </AppContext.Provider>
    </>
  );
}

export default Context;
