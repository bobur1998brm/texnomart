import React from 'react'
import './Header.css'
import logo from '../../assets/texnomart.svg'
import {MdKeyboardVoice} from 'react-icons/md'
import {BiSearch, BiUser} from 'react-icons/bi'
import {RiScales3Line, RiShoppingCart2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Header({showBusketF,order,showLoginF}) {
    return (
        <div className="header">
           <div className="container">
                <div className="header_top">
                    <div className="header_topSelect">
                        <label htmlFor="">Sizning shahringiz: </label>
                        <select>
                            <option value=""> Toshkent</option>
                        </select>
                    </div>
                    <ul className="header_topCollection">
                        <li>B2B sotuvi</li>
                        <li>Texnomart haqida</li>
                        <li>Malumoti</li>
                        <li>Bizning Do'konlar</li>
                        <li>Texnomartda ishalash</li>
                        <li>Qayta aloqa</li>
                    </ul>
                    <p>+99895 019 06 68</p>
                </div>
                <div className="header_bottom">
                    <div className="logo">
                       <Link to="/"> <img src={logo} alt="" /></Link>
                    </div>
                    <div className="header_search">
                        <select >
                            <option value="">Barcha Tovarlar</option>
                            <option value="">Uy anjomalari</option>
                            <option value="">Ofis anjomalari</option>
                            <option value="">Barcha Tovarlar</option>
                            <option value="">Uy anjomalari</option>
                            <option value="">Ofis anjomalari</option>
                        </select>
                        <input type="text" placeholder="Smart Watch" />
                        <div className="voice"><MdKeyboardVoice/></div>
                        <div className="search_icon"><BiSearch/></div>
                    </div>
                    <div className="login_kassa">
                        <div className="login_kassaItem" onClick={showLoginF}>
                            <BiUser/>
                            <p>Kirish</p>
                        </div>
                        <div className="login_kassaItem">
                            <RiScales3Line/>
                            <p>Taqqoslash</p>
                        </div>
                        <div onClick={showBusketF} className="login_kassaItem savat">
                            <RiShoppingCart2Line/>
                            <p>Savat</p>
                            <div className="count_order"><span>{order?.length}</span></div>
                        </div>
                      
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Header
