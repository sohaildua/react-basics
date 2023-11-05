import React, { useState } from "react"
import { NameFunc } from "./NameFunc"
import { Counter } from "./Counter"

function App() {
  const [name, setName] = useState("Bulbasaur")
  /*return (
    <div>
      <NameFunc name="hola" age={21} />
      <Counter></Counter>
    </div>
  )*/
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value)
      }}
    />
  )
}

export default App
