import { useState } from "react"
// note class one always seem different
export function FunctionCompuation() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br></br>
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <>br</>
      <span>
        My name is {name} and I am {age} years old
      </span>
    </div>
  )
}
