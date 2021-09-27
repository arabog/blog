import "./singlePost.css"
import axios from "axios"
import { useLocation } from "react-router"
import { useState, useContext, useEffect,  } from "react"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"


export default function SinglePost() {
          const location = useLocation()
          const path = location.pathname.split("/")[2]

          const [post, setPost] = useState({})
          const [title, setTitle] = useState("")
          const [desc, setDesc] = useState("")
          const [updateMode, setUpdateMode] = useState(false)

          const { user } = useContext(Context)

          const PF = "http://localhost:9000/images/"


          useEffect(
                    () => {
                              const getPost =  async () => {
                                        const res = await axios.get("/posts/" + path)

                                        setPost(res.data)
                                        setTitle(res.data.title)
                                        setDesc(res.data.desc)
                              }

                              getPost()
                    }, [path]
          )

          const handleDelete = async () => {
                    try {
                              await axios.delete(`/posts/${post._id}`, {
                                        data: {
                                                  username: user.username
                                        }
                              })

                              window.location.replace("/")
                              
                    } catch (err) {
                              
                    }
          }

          const handleUpdate = async () => {
                    try {
                              await axios.put(`/posts/${post._id}`, {
                                        username: user.username,
                                        title,
                                        desc,
                              })

                              setUpdateMode(false)

                    } catch (err) {
                              
                    }
          }


          return (
                    <div className="singlePost">

                              <div className="singlePostWrapper">
                                        {
                                                  post.photo && 
                                                            <img 
                                                                      src= {PF + post.photo}
                                                                      alt="singlePostImg" 
                                                                      className="singlePostImg" 
                                                            />
                                        }

                                        {
                                                  updateMode ?
                                                            <input 
                                                                      type="text" 
                                                                      className="singlePostTitleInput" 
                                                                      value = {title}
                                                                      onChange ={e => setTitle(e.target.value)}
                                                                      autoFocus
                                                            />
                                                            : <h1 className="singlePostTitle">
                                                                      {title}

                                                                      {
                                                                                post.username === user?.username &&
                                                                                          <div className="singlePostEdit">
                                                                                                    <button 
                                                                                                              className="singlePostIcon"
                                                                                                              onClick={() => setUpdateMode(true) }
                                                                                                    >
                                                                                                              Update
                                                                                                    </button>

                                                                                                    <button 
                                                                                                              className="singlePostIcon delBtn"
                                                                                                              onClick={ handleDelete }
                                                                                                    >
                                                                                                              Delete
                                                                                                    </button>

                                                                                          </div>
                                                                      }
                                                            </h1>
                                        }


                                        <div className="singlePostInfo">
                                                  <span className="singlePostAuthor">
                                                            Author:

                                                            <Link to={`/?user=${post.username}`} className="link" >
                                                                      <b> { post.username } </b>
                                                            </Link>
                                                  </span>

                                                  <span className="singlePostDate">
                                                            { new Date(post.createdAt).toDateString()}
                                                  </span>
                                        </div>

                                        {
                                                  updateMode ?
                                                            <textarea
                                                                      className="singlePostDescInput"
                                                                      value = {desc}
                                                                      onChange = { e => setDesc(e.target.value)}
                                                            />
                                                            : <p className="singlePostDesc"> { desc } </p>
                                        }

                                        {
                                                  updateMode && (
                                                            <button 
                                                                      className="singlePostButton"
                                                                      onClick= {handleUpdate}
                                                            >
                                                                      Update
                                                            </button>
                                                  )
                                        }

                              </div>

                    </div>
          )
}


