import { useEffect, useState } from "react"

export function Child() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  //need to learn the difference between useState and useEffect
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
