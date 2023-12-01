import { useState } from "react"
import { checkEmail, checkPassword } from "./validator"

export function StateForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

  const emailErrors = isAfterFirstSubmit ? checkEmail(email) : []
  const passwordErrors = isAfterFirstSubmit ? checkPassword(email) : []

  function handleSubmit(e) {
    e.preventDefault()
    setIsAfterFirstSubmit(true)
    const emailResults = checkEmail(email)
    const passwordResults = checkPassword(password)

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
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
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
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
      {passwordErrors.length > 0 && (
        <div className="msg">{passwordErrors.join(", ")}</div>
      )}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
