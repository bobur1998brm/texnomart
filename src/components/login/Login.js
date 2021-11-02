import React from 'react'
import './Login.css'
import {AiOutlineClose} from 'react-icons/ai'

function Login({showLoginF, showLogin}) {
    return (
        <div  style={showLogin?{display:"block"}:{display:"none"}}   className="login_container">

            <div className="login_bg" onClick={showLoginF}></div>

            <div className="login">
                <div className="login_head">
                    <h3>Войти на сайт</h3>
                    <div >
                        <AiOutlineClose onClick={showLoginF}/>
                    </div>
                </div>
                <div className="login_body">
                    <p>* - Поля, обязательные для заполнения.</p>
                    <div className="login_input">
                        <input type="text" placeholder="Login" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="login_btn">
                        <button className="product_buy">Log in</button>
                        <button className="product_buy">Registration</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
