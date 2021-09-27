import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"
import { useState, useContext, 
          // useEffect
} from "react"
import { Context } from "../../context/Context"
import axios from 'axios'


export default function Settings() {
          const [file, setFile] = useState(null)
          const [username, setUsername] = useState("")
          const [email, setEmail] = useState("")
          const [password, setPassword] = useState("")
          const [success, setSuccess] = useState(false)

          
          // const [posts, setPosts] = useState({})     
          // const [currentUser, setCurrentUser] = useState("")    

          
          const { user, dispatch} = useContext(Context)


          const PF = "http://localhost:9000/images/"

          // useEffect(
          //           () => {
          //                     const getUser = async () => {
          //                               const res = await axios.get("/users/"+user._id)
          //                               setCurrentUser(res.data)
          //                     }

          //                     getUser()
          //           }, [user._id]
          // )

          // useEffect(
          //           () => {
          //                     const getPost = async () =>{
          //                               const res = await axios.get(`/posts/blog/${user.username}`)
          //                               setPosts(res.data)
          //                     }

          //                     getPost()
          //           }, [user.username]
          // )


          const handleDelete = async () => {
                    try {
                              await axios.delete(`/users/${user._id}`, {
                                        data: {
                                                  username: user.username,
                                                  // currentUser,
                                                  // posts
                                        }
                              })

                              window.location.replace("/register")
                              
                    } catch (err) {
                              console.log(err)
                    }
          }


          const handleSubmit = async (e) => {
                    e.preventDefault()

                    dispatch(
                              {
                                        type: "UPDATE_START"
                              }
                    )

                    const updatedUser = {
                              userId: user._id,
                              username,
                              email,
                              password,
                    }

                    if(file) {
                              const data = new FormData()
                              const filename = Date.now()+ file.name

                              data.append("name", filename)
                              data.append("file", file)

                              updatedUser.profilePic = filename

                              try {
                                        await axios.post("/upload", data)
                              } catch (err) {
                                        
                              }
                    }

                    try {
                              const res = await axios.put("/users/" + user._id, updatedUser)
                              console.log(res)
                              setSuccess(true)

                              dispatch(
                                        {
                                                  type: "UPDATE_SUCCESS",
                                                  payload: res.data
                                        }
                              )

                    } catch (err) {
                              dispatch(
                                        {
                                                  type: "UPDATE_FAILURE"
                                        }
                              )
                    }
          }
console.log(user)

          return (
                    <div className="settings">
                              <div className="settingsWrapper">
                                        <div className="settingsTitle">
                                                  <span className="settingsUpdateTitle">Update Account</span>
                                        </div>

                                        <form className="settingsForm" onSubmit={handleSubmit}>
                                                  <label>Profile Picture</label>

                                                  <div className="settingsPP">
                                                  
                                                            <img 
							src={
                                                                                file 
                                                                                          ? URL.createObjectURL(file) 
                                                                                          : PF+user.profilePic
                                                                      }
                                                                      alt="profilePic" 
                                                            />

                                                            <label htmlFor="fileInput" >
                                                                      <span className="settingsPPIcon"> Click </span>
                                                            </label>

                                                            <input 
                                                                      type="file" 
                                                                      id="fileInput"
                                                                      style={{display: "none"}}
                                                                      onChange={e => setFile(e.target.files[0])}
                                                            />
                                                  </div>

                                                  <label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>

                                                  <label> Email </label>
                                                  <input 
                                                            type="email" 
                                                            placeholder = {user.email}
                                                            onChange= {e => setEmail(e.target.value)}
                                                  />

                                                  <label>Password</label>
                                                  <input
                                                            type="password" 
                                                            placeholder = "Change password ?"
                                                            onChange= {e => setPassword(e.target.value)}
                                                  />

                                                  <div className="button">
                                                            <button className="settingsSubmit" type="submit">
                                                                      Update
                                                            </button>

                                                            {/* <button 
                                                                      className="settingsDelete"
                                                                      onClick={ handleDelete }
                                                                      type="submit"
                                                            >
                                                                      Delete Account
                                                            </button> */}

                                                  </div>

                                                  {
                                                            success && 
                                                                      <span 
                                                                                style={
                                                                                          {
                                                                                                    color: "green",
                                                                                                    textAlign: "center",
                                                                                                    marginTop: "20px"
                                                                                          }
                                                                                }
                                                                      >
                                                                                Profile has been updated....
                                                                      </span>
                                                  }

                                        </form>

                                        <div className="button">
                                                  <button 
                                                                      className="settingsDelete"
                                                                      onClick={ user?.username && handleDelete }
                                                                      type="submit"
                                                            >
                                                                      Delete Account
                                                  </button>
                                        </div>

                              </div>

                              <Sidebar />
                    </div>
          )
}
