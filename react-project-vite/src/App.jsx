import React, { useEffect, useRef, useState } from "react"
import { NameFunc } from "./NameFunc"
import { Counter } from "./Counter"
import { FunctionCompuation } from "./FunctionComp"
import { Child } from "./Child"
import TestApi from "./TestApi"
import { ReactFetch } from "./ReactFetch"
import { ArrayFunction } from "./ArrayFunction"
import { StateForm } from "./StateForm"
import "./style.css"
import { RefForm } from "./RefForm"

const INTIAL_VALUE = ["A", "B", "C"]
function App() {
  const [name, setName] = useState("")
  const inputRef = useRef()
  // 1. create a new array to store 3 values
  const [array, setArray] = useState(INTIAL_VALUE)

  useEffect(() => {
    console.log("112" + inputRef.current.value)
  }, [name])

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
    <React.Fragment>
      <RefForm />
      <ArrayFunction />
      <ReactFetch />
      <Counter></Counter>
      // using api
      <TestApi />
      <FunctionCompuation />
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
      <Child />
      {array.join(",")}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </React.Fragment>
  )
}

export default App
