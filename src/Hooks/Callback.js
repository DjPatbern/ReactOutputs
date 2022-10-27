import React, { useCallback, useState } from "react";
import Child from "../components/Child";

function Callback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("God Abeg");

  const returnComment = useCallback(
    (name) => {
    return data + name;
  },
    [data]
  );

  return (
    <>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <p>HIM DON TOGGLE</p>}
    </>
  );
}

export default Callback;
