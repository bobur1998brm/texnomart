import React, { useState } from 'react'
import './Navbar.css'
import {NAVBAR} from '../../data/STATIC_DATA'

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [showNavbarItem, setShowNavbarItem] = useState()
    const showNav = (id) => {
        setShowNavbarItem(NAVBAR.filter(i=> i.id === id)[0])
    }
    return (
        <div className="navbar">
            <div className="navbar_caontainer">
                {
                    NAVBAR?.map(item => <div className="navbar_item" onMouseLeave={()=> setShowNavbar(false)} onMouseOver={()=> {
                    showNav(item.id) 
                    setShowNavbar(true)}} key={item.id}>
                        <p  className="nav_item">{item.title}</p>
                    </div>)
                }
            </div>
            <div  onMouseLeave={()=> setShowNavbar(false)} onMouseOver={()=>{setShowNavbar(true)}} style={showNavbar ? {display:"block"}:{display:"none"}} className="navbar_bottom">
                <div className="container navbar_bottomGrid">
                    <div className="navbar_bottomText">
                        <h3>{showNavbarItem?.title}</h3>
                        <div className="navbar_bottomTextGrid">
                            <ul>
                                {showNavbarItem?.types.slice(0,6).map((item,inx) => <li className="navbar_bottomItem" key={inx}>
                                    {item}
                                </li>)}
                            </ul>
                            <ul>
                                {showNavbarItem?.types.map((item,inx) => <li className="navbar_bottomItem" key={inx}>
                                    {item}
                                </li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar_bottomImage">
                        <img src={showNavbarItem?.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
