import "./sidebar.css"

export default function Sidebar() {
          return (
                    <div className="sidebar">

                              <div className="sidebarItem">
                                        <span className="sidebarTitle"> ABOUT ME </span>

                                        <img 
					src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                                                  alt=""
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
                                                  <li className="sidebarListItem"> category name 1</li>
                                                  <li className="sidebarListItem"> category name 2</li>
                                                  <li className="sidebarListItem"> category name 3</li>
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
