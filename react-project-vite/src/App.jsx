import React from "react"
import { NameFunc } from "./NameFunc"
import { Counter } from "./Counter"

function App() {
  return (
    <div>
      <NameFunc name="hola" age={21} />
      <Counter></Counter>
    </div>
  )
}

export default App
