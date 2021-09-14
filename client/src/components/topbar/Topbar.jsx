import "./topbar.css"


export default function Topbar() {
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
                                                            HOME
                                                  </li>

                                                  <li className="topListItem">
                                                            ABOUT
                                                  </li>

                                                  <li className="topListItem">
                                                            CONTACT
                                                  </li>

                                                  <li className="topListItem">
                                                            WRITE
                                                  </li>

                                                  <li className="topListItem">
                                                            LOGOUT
                                                  </li>

                                        </ul>

                              </div>

                              <div className="topRight">
                                        user image
                              </div>

                              <li>Search icon</li>
                    </div>
          )
}


