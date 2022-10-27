import React, { useContext } from "react";
import {AppContext} from '../Hooks/Context'

function User() {
    const {username} = useContext(AppContext)
  return (
    <>
      <h1>User: {username}</h1>
    </>
  );
}

export default User;