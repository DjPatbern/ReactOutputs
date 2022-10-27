import React, { useRef } from "react";

function Ref() {
// const [name, setName] = useState('')
  const inputRef = useRef(null)

  function btnClick() {
// setName(inputRef.current.value) 
inputRef.current.focus() 
}

function btnClear() {
  // setName(inputRef.current.value) 
  inputRef.current.value = ""
  }

  return (
    <>
      <h1>Use Ref</h1>
      {/* <h2>{name}</h2> */}
      <input type="text" placeholder="Ex.." ref={inputRef}></input>
      <button onClick={btnClick}>Change Name</button>
      <button onClick={btnClear}>Clear name</button>

      <br></br>
    </>
  );
}

export default Ref;

// deleted comments were used to output the input value as name in h2 using useState

// the active code is just used to make the input field focus when the change name btn is clicked

// the close also clears the input on clear btn clicked