import { useState } from "react"

export function useArray(intialValue) {
  const [array, setArray] = useState(intialValue)

  function push(element) {
    setArray((array) => [...array, element])
  }

  function replace(index, value) {
    setArray((array) => {
      return [...array.slice(0, index), value, ...array.slice(index + 1)]
    })
  }
  return { array, set: setArray, push, replace }
}