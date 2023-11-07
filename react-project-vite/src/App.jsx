import React, { useState } from "react"
import { NameFunc } from "./NameFunc"
import { Counter } from "./Counter"

function App() {
  const [name, setName] = useState("Bulbasaur")
  // 1. create a new array to store 3 values
  const [array, setArray] = useState(["A", "B", "C"])
  /*return (
    <div>
      <NameFunc name="hola" age={21} />
      <Counter></Counter>
    </div>
  )*/
  /*return (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value)
      }}
    />
  )*/
  //
  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.splice(1)
    })
  }
  return (
    <div>
      <button onClick={removeFirstElement}>Remove</button>
      {array.join(",")}
    </div>
  )
}

export default App
