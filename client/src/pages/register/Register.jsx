import "./register.css"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Register() {
          const [username, setUsername] = useState("")
          const [email, setEmail] = useState("")
          const [password, setPassword] = useState("")
          const [error, setError] = useState(false)

          const handleSubmit = async (e) => {
                    e.preventDefault()

                    setError(false)

                    try {
                              const res = await axios.post("/auth/register", {
                                        username,
                                        email,
                                        password,
                              })

                              res.data && window.location.replace("/login")
                    } catch (err) {
                              setError(true)
                    }

          }


          return (
                    <div>
                              <div className="register">

                                        <span className="registerTitle">Register</span>

                                        <form className="registerForm" onSubmit={handleSubmit}>
                                                  <label htmlFor="username">Username</label>
                                                  <input 
                                                            id="username"
                                                            type="text" 
                                                            className="registerInput"
                                                            placeholder="Enter your username..."
                                                            onChange={e => setUsername(e.target.value)}
                                                  />

                                                  <label htmlFor="email">Email</label>
                                                  <input 
                                                            id="email"
                                                            type="text" 
                                                            className="registerInput"
                                                            placeholder="Enter your email..."
                                                            onChange={e => setEmail(e.target.value)}
                                                  />

                                                  <label htmlFor="password">Password</label>
                                                  <input 
                                                            id="password"
                                                            type="password" 
                                                            className="registerInput"
                                                            placeholder="Enter your password..."
                                                            onChange={e => setPassword(e.target.value)}
                                                  />

                                                  <button className="registerButton" type="submit">
                                                            Register
                                                  </button>

                                        </form>

                                        <button className="loginButton">
                                                  <Link to="/login"className="link">
                                                            Login
                                                  </Link>
                                        </button>

                                        {
                                                  error && 
                                                            <span style={{color: "red", marginTop: "20px"}}> 
                                                                      Something went wrong
                                                            </span>
                                        }
                              </div>
                    </div>
          )
}
