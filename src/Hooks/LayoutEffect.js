import React, { useLayoutEffect } from "react";

function LayoutEffect() {
useLayoutEffect(() => {
  console.log("uselayout");
},[])

  return (
    <>
      <h1>Use LayoutEffect</h1>
    </>
  );
}

export default LayoutEffect;
