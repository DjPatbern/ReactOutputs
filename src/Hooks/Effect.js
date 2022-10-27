import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[4]);
      });
      console.log("Ikpa ndito");
  }, []);

  return (
    <>
      <h1>Use Effect</h1>
      <li>No: {data.id}</li>
      <li>Name: {data.name}</li>
      <li>Email: {data.email}</li>
      <li>Comment: {data.body}</li>
    </>
  );
}

export default Effect;
