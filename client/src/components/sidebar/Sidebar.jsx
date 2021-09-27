import "./sidebar.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Sidebar() {
        const [cats, setCats] = useState([])

        useEffect(
                () => {
                        const getCats = async () => {
                                // const res = await axios.get("/categories")
                                const res = await axios.get("/posts")   
                                // console.log(res.data)                             
                                setCats(res.data)
                        }

                        getCats()

                }, []
        )

        console.log(cats)

        return (
                <div className="sidebar">

                        <div className="sidebarItem">
                                <span className="sidebarTitle"> ABOUT ME </span>

                                <img 
                                        src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                                        alt="sidebarImg"
                                />

                                <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                Qui, ipsam maiores maxime optio commodi ratione nemo 
                                                ipsa minus placeat rerum.
                                </p>
                        </div>

                        <div className="sidebarItem">
                                <span className="sidebarTitle">CATEGORIES</span>

                                <ul className="sidebarList">
                                        {
                                                cats.map(c => (
                                                        <Link to={`/?cat=${c.categories}`} className="link">
                                                                <li className="sidebarListItem"> {c.categories}</li>
                                                        </Link>
                                                ))
                                        }
                                </ul>
                        </div>

                        <div className="sidebarItem">
                                <span className="sidebarTitle">FOLLOW US</span>

                                <div className="sidebarSocial">
                                                <li className="sidebarIcon">facebook</li>
                                                <li className="sidebarIcon">twitter</li>
                                                <li className="sidebarIcon">instagram</li>
                                </div>
                        </div>
                </div>
        )
}
