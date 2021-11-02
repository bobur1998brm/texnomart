import React from 'react'
import './Product.css'
import {MdStar} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {RiScales3Line,RiShoppingCart2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Product({data,id, addToBasket,setHoverPro,animateImg}) {
  
    return (
        <div className="product">
            <div className="product_img">
                <img src={data.image} alt="" />
                <p className="product_rek">New</p>
            </div>
            <div className="product_body">
                <h4>{data.category}</h4>
                <Link className="product_title" to={`/products/${id}`}>
                 <h3>{data.title}</h3>
                </Link>
                <div className="rating">
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <AiFillMessage/>
                    <span>Sharhlar</span>
                </div>
                <p className="product_price">Narx: {data.price} so'm</p>
                <p className="product_Price_month">To'lov: oyiga <b> {Math.floor(data.price / 11)}</b> so'mdan</p>
                <div className="product_btns">
                    <button onMouseEnter={(e)=>{
                        setHoverPro({ x:e.pageX,  y:e.pageY,top:e.clientY, img:data.image});
                    } } onClick={()=> {
                        animateImg()
                        addToBasket({image:data.image, title:data.title,price:data.price,id});
                    }} className="product_buy"><RiShoppingCart2Line/> Karzinka</button>
                    <button className="product_scale"><RiScales3Line/></button>
                </div>    
            </div>        
        </div>
      
    )
}

export default Product


