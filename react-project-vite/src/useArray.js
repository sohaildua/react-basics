import { useState } from "react"

export function useArray(intialValue) {
  const [array, setArray] = useState(intialValue)
  function push(element) {
    setArray((array) => [...array, element])
  }
  return { array, set: setArray, push }
}
