import { useEffect, useState } from "react"

export function Child() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  //need to learn the difference between useState and useEffect
  //useState is used to manage state within a component,
  //allowing you to store and update data. useEffect is used to perform side effects in a component,
  //such as updating the document title, fetching data, or subscribing to events.
  useEffect(() => {
    console.log("multiple useEffect")
    /// it will work with every time a state changes
  })

  useEffect(() => {
    console.log("one time effect")
    /// it will work with one time on first render
  }, [])

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
