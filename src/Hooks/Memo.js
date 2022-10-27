import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Memo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("Get Computed");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <>
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>TOGGLED</h1>}
    </>
  );
}

export default Memo;

// without the use memo hook, that console.log("Get Coomputed") will re-render anytime some is being triggered
// and it will show the performance of the app

// also, the output is just a function that outputs the longest name from the fetched API.. The toggle button is used to
// examine the app re-rendering
