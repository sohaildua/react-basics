import axios from "axios"
import React, { useEffect, useState } from "react"

export default function TestApi() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/"

  const [posts, setPosts] = useState([])

  function addPosts() {
    setPosts((posts) => {
      return [
        { id: crypto.randomUUID, title: "Hello", body: "qwqwq" },
        ...posts,
      ]
    })
  }

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
      <button className="btn btn-primary" onClick={addPosts}>
        Create
      </button>
      <pre></pre>
      {posts &&
        posts.map &&
        posts?.map((post) => {
          return (
            <React.Fragment className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <input type="text"></input>
            </React.Fragment>
          )
        })}
    </div>
  )
}
