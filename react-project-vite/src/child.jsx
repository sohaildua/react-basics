import { useEffect, useState } from "react"

export function child() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.title = name
  }, [name])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
