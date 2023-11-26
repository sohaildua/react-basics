import { useState } from "react"

export function Counter() {
  const [counter, onClick] = useHandleCounter(0)

  return <div onClick={onClick}>{counter}</div>
}

function useHandleCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter((currentCount) => currentCount + 1)
  }

  return [counter, handleClick]
}
