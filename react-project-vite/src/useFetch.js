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

    axios
      .get(url, {
        params: {
          filter: '[["id", "=", 11]]',
        },
      })
      .then((response) => {
        setData(response.data.filter((user) => user.id === 1))
        console.log("Success")
      })
      .catch((error) => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url])

  return { data, isError, isLoading }
}
