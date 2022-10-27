import React, { useRef } from "react";
import Button from "../components/Button";

function ImperativeHandle() {
  const buttonRef = useRef(null)
  return (
    <>
      <button onClick={() => {buttonRef.current.alterToggle()}}  >Button From Parent</button>
      <Button ref={buttonRef} />
    </>
  );
}

export default ImperativeHandle;
