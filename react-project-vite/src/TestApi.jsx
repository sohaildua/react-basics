import axios from "axios"
import React, { useEffect, useState } from "react"

export default function TestApi() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPosts(response.data)
        console.log("Success")
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("everything done")
      })
  }, [])
  if (!posts) return "No posts found"
  return <p>{posts.body}</p>
}
