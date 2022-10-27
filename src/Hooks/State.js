import React, { useState } from "react";

function State() {
const [counter, setCounter] = useState(0)
const [input, setInput] = useState('')

function inputValue(e) {
e.preventDefault()
setInput(e.target.value)
}

    return(
        <>
        <h1>Use State</h1>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increament</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter - 1)}>Decreament</button>

<p>Example 2(input value printing)</p>
<input type="text" placeholder="type something" onChange={inputValue}></input>
{input}

        </>
    )
}

export default State