import React, { useState } from "react"
import { NameFunc } from "./NameFunc"
import { Counter } from "./Counter"
import { FunctionComp } from "./FunctionComp"

const INTIAL_VALUE = ["A", "B", "C"]
function App() {
  const [name, setName] = useState("Bulbasaur")
  // 1. create a new array to store 3 values
  const [array, setArray] = useState(INTIAL_VALUE)
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
  function removeSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((el) => el !== letter)
    })
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter]
    })
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray]
    })
  }

  function clear() {
    setArray((currentArray) => {
      return []
    })
  }

  function reset() {
    setArray(INTIAL_VALUE)
  }

  return (
    <div>
      <FunctionComp />

      <button onClick={removeFirstElement}>Remove</button>
      <br></br>
      <button onClick={() => removeSpecificElement("B")}>
        Specific Element
      </button>
      <br></br>
      <br></br>
      <button onClick={() => addLetterToEnd("B")}>
        Specific Element to end
      </button>
      <br></br>
      <button onClick={() => addLetterToStart("1")}>
        Specific Element to start
      </button>
      <br></br>
      <button onClick={clear}>clear</button>
      <br></br>
      <button onClick={reset}>reset</button>
      <br></br>

      {array.join(",")}
    </div>
  )
}

export default App
