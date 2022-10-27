import React, { useEffect } from "react";
// import { returnComment } from "../Hooks/Callback";

function Child({ returnComment }) {
useEffect(() => {
    console.log("Function Called");
},[returnComment])

  return (
    <>
      <h1>{returnComment("Patbern")}</h1>
    </>
  );
}

export default Child;
