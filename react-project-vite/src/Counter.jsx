import { useState } from "react"

export function Counter() {
  const [counter, setCounter] = useState(0)

  function handleCounter() {
    setCounter((currentCount) => {
      return currentCount + 1
    })
  }

  return (
    <div onClick={handleCounter}>
      {0}
      {counter}
    </div>
  )
}
