import React, { useContext } from "react";
import {AppContext} from '../Hooks/Context'


function Login() {
    const {setUsername} = useContext(AppContext)
  return (
    <>
      <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}></input>
    </>
  );
}

export default Login;