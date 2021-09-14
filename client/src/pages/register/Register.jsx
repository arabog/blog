import "./register.css"

export default function Register() {
          return (
                    <div>
                              <div className="register">

                                        <span className="registerTitle">Register</span>

                                        <form className="registerForm">
                                                  <label htmlFor="username">Username</label>
                                                  <input 
                                                            id="username"
                                                            type="text" 
                                                            className="registerInput"
                                                            placeholder="Enter your username..."
                                                  />

                                                  <label htmlFor="email">Email</label>
                                                  <input 
                                                            id="email"
                                                            type="text" 
                                                            className="registerInput"
                                                            placeholder="Enter your email..."
                                                  />

                                                  <label htmlFor="password">Password</label>
                                                  <input 
                                                            id="password"
                                                            type="text" 
                                                            className="registerInput"
                                                            placeholder="Enter your password..."
                                                  />

                                                  <button className="registerButton">
                                                            Register
                                                  </button>


                                        </form>

                                        <button className="loginButton">
                                                  Login
                                        </button>
                              </div>
                    </div>
          )
}
