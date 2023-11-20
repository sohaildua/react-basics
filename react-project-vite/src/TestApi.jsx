import axios from "axios"
import React, { useEffect, useState } from "react"

export default function TestApi() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/"

  const [posts, setPosts] = useState([])

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
  return (
    <div className="app">
      <h2>All Posts 📫</h2>
      {posts &&
        posts.map &&
        posts?.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
            </div>
          )
        })}
    </div>
  )
}
