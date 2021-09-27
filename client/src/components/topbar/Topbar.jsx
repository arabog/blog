import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function Topbar() {
          const { user, dispatch } = useContext(Context)

          const PF = "http://localhost:9000/images/"

          const handleLogout = () => {
                    dispatch(
                              {
                                        type: "LOGOUT"
                              }
                    )
          }


          return (
                    <div className="top">
                              <div className="topLeft">
                                        <li>Facebook</li>
                                        <li>Instagram</li>
                                        <li>LinkedIn</li>
                                        <li>Twitter</li>
                              </div>

                              <div className="topCenter">
                                        <ul className="topList">
                                                  <li className="topListItem">
                                                            <Link to="/" className="link">
                                                                      HOME
                                                            </Link>
                                                  </li>

                                                  <li className="topListItem">
                                                            <Link to="/about" className="link">
                                                                      ABOUT
                                                            </Link>
                                                  </li>

                                                  <li className="topListItem">
                                                            <Link to="/contact" className="link">
                                                                      CONTACT
                                                            </Link>
                                                  </li>

                                                  <li className="topListItem">
                                                            <Link to="/write" className="link">
                                                                      WRITE
                                                            </Link>
                                                  </li>

                                                  <li className="topListItem" onClick={handleLogout}>
                                                            { user && "LOGOUT" }
                                                  </li>

                                        </ul>

                              </div>

                              <div className="topRight">
                                        {
                                                  user ?
                                                            <Link to="/settings">
                                                                      <img 
                                                                                src={PF + user.profilePic} 
                                                                                alt="profilePic" 
                                                                                className="topImg" 
                                                                      />
                                                            </Link>
                                                            :
                                                            <ul className="topList">
                                                                      <li className="topListItem">
                                                                                <Link to="/login" className="link">
                                                                                          LOGIN
                                                                                </Link>
                                                                      </li>

                                                                      <li className="topListItem">
                                                                                <Link to="/register" className="link">
                                                                                          REGISTER
                                                                                </Link>
                                                                      </li>

                                                            </ul>
                                        }

                                        <li className="topSearchIcon">Search icon</li>

                              </div>

                    </div>
          )
}


