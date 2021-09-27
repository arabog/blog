import "./login.css"
import { useRef, useContext } from "react"
import {Context } from "../../context/Context"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Login() {
          const userRef = useRef()
          const passwordRef = useRef()

          const { dispatch, isFetching } = useContext(Context)

          const handleSubmit = async (e) => {
                    e.preventDefault()

                    dispatch({ type: "LOGIN_START" })

                    try {
                              const res = await axios.post("/auth/login", {
                                        username: userRef.current.value,
                                        password: passwordRef.current.value
                              })

                              dispatch({ type: "LOGIN_SUCCESS", payload: res.data})

                    } catch (err) {
                              dispatch({ type: "LOGIN_FAILURE" })
                    }
          }


          return (
                    
                    <div className="login">
                              <span className="loginTitle">Login</span>

                              <form  className="loginForm" onSubmit={handleSubmit}>
                                        <label htmlFor="username">Username</label>
                                        <input 
                                                  id="username"
                                                  type="text" 
                                                  className="loginInput"
                                                  placeholder="Enter your password..."
                                                  ref={userRef}
                                        />

                                        <label htmlFor="password">Password</label>
                                        <input 
                                                  id="password"
                                                  type="password" 
                                                  className="loginInput"
                                                  placeholder="Enter your password..."
                                                  ref={passwordRef}
                                        />

                                        <button 
                                                  className="loginButton"  
                                                  type="submit"
                                                  disabled={isFetching}
                                        >
                                                  Login
                                        </button>
                              </form>

                              <button className="registerButton">
                                        <Link to="/register" className="link">
                                                  Register
                                        </Link>
                              </button>
                    </div>
          )
}
