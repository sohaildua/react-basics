import { useState } from "react"

export function StateForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form className="form">
      <div className="form-group error">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="msg">Must end in @webdevsimplified.com</div>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
