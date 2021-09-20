import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
          return (
                    <div className="settings">
                              <div className="settingsWrapper">
                                        <div className="settingsTitle">
                                                  <span className="settingsUpdateTitle">Update Account</span>
                                        </div>

                                        <form className="settingsForm">
                                                  <label htmlFor="">Profile Picture</label>

                                                  <div className="settingsPP">
                                                            <img src="" alt="" />

                                                            <label htmlFor="fileInput" >
                                                                      <span className="settingsPPIcon"> Click </span>
                                                            </label>

                                                            <input 
                                                                      type="file" 
                                                                      id="fileInput"
                                                                      style={{display: "none"}}
                                                            />
                                                  </div>

                                                  <label> Email </label>
                                                  <input type="email" />

                                                  <label>Password</label>
                                                  <input type="password" />

                                                  <div className="button">
                                                            <button className="settingsSubmit" type="submit">
                                                                      Update
                                                            </button>

                                                            <button className="settingsDelete">
                                                                      Delete Account
                                                            </button>
                                                  </div>

                                        </form>
                              </div>

                              <Sidebar />
                    </div>
          )
}
