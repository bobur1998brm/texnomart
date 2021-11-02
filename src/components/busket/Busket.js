import React from 'react'
import './Busket.css'
import {AiOutlineClose} from 'react-icons/ai'

function Busket({showBusketF,showBusket,order,removeOrder}) {
    let total = 0;
    order?.forEach(i=> total += Number(i.quontity * i.price))
    return (
        <div  style={showBusket?{display:"block"}:{display:"none"}}   className="busket_container">

            <div className="busket_bg" onClick={showBusketF}></div>

            <div className="busket">
                <div className="busket_head">
                    <h3>Корзина покупателя</h3>
                    <div >
                        <AiOutlineClose onClick={showBusketF}/>
                    </div>
                </div>
                <div className="busket_body">
                    {
                        order?.map(item=>(
                            <div className="busket_item" key={item.id}>
                               <div>
                               <img className="busket_img" src={item.image} alt="" />
                                <h3>{item.title}</h3>
                               </div>
                                <div className="busket_amount">
                                <h4 >Count: {item.quontity}</h4>
                                <p className="busket_price">{item.quontity * item.price} so'm</p>
                                <AiOutlineClose  onClick={()=> removeOrder(item.id)}/>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="busket_footer">
                    <p>В вашей корзине нет товаров</p>
                    <h2>{total ? `${total} So'm`:null}</h2>
                </div>
            </div>
        </div>
    )
}

export default Busket
