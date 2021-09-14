import "./login.css"

export default function Login() {
          return (
                    <div>
                              <div className="login">
                                        <span className="loginTitle">Login</span>

                                        <form  className="loginForm">
                                                  <label htmlFor="username">Username</label>
                                                  <input 
                                                            id="password"
                                                            type="text" 
                                                            className="loginInput"
                                                            placeholder="Enter your password..."
                                                  />

                                                  <label htmlFor="password">Password</label>
                                                  <input 
                                                            id="password"
                                                            type="text" 
                                                            className="loginInput"
                                                            placeholder="Enter your password..."
                                                  />

                                                  <button className="loginButton"  >
                                                            Login
                                                  </button>
                                        </form>

                                        <button className="registerButton">
                                                  Register
                                        </button>
                              </div>
                    </div>
          )
}
