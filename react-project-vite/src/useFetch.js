import { useEffect, useState } from "react"
import axios from "axios"

export function useFetch(url, options = {}) {
  const [data, setData] = useState()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setData(undefined)
    setIsError(false)
    setIsLoading(true)
    const abortController = new AbortController()

    axios
      .get(url, { signal: abortController.signal })
      .then((response) => {
        setData(response.data.filter((user) => user.id === 1))
        console.log("Success")
      })
      .catch((error) => {
        if (error.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (abortController.signal.aborted) return
        setIsLoading(false)
      })

    return () => {
      abortController.abort()
    }
  }, [url])

  return { data, isError, isLoading }
}
