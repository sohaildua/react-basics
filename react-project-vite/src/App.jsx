import React, { useState } from "react"
import { NameFunc } from "./NameFunc"
import { Counter } from "./Counter"

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
      <button onClick={removeFirstElement}>Remove</button>
      <button onClick={() => removeSpecificElement("B")}>
        Specific Element
      </button>
      <button onClick={() => addLetterToEnd("B")}>
        Specific Element to end
      </button>
      <button onClick={() => addLetterToStart("1")}>
        Specific Element to start
      </button>
      <button onClick={clear}>clear</button>
      <button onClick={reset}>reset</button>

      {array.join(",")}
    </div>
  )
}

export default App
