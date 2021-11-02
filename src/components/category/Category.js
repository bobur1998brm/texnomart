import React from 'react'
import './Category.css'
import {BsArrowRight} from 'react-icons/bs'

function Category() {
    return (
        <div className="container">
            <div className="category">
                <div className="category_item">
                    <img src="https://texnomart.uz/files/global/page/icons/pokupka-rassrochka.svg" alt="" />
                    <h3>To'lov bo'yicha sotib olish</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id sapiente dolor.</p>
                    <BsArrowRight/>
                </div>
                <div className="category_item">
                    <img src="https://texnomart.uz/files/global/page/icons/delivery.svg" alt="" />
                    <h3>To'lov bo'yicha sotib olish</h3>
                    <p>Lorem ipsum dolor sit amet consectetur quis dolor.</p>
                    <BsArrowRight/>
                </div>
                <div className="category_item">
                    <img src="https://texnomart.uz/files/global/page/icons/warranty.svg" alt="" />
                    <h3>To'lov bo'yicha sotib olish</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolor.</p>
                    <BsArrowRight/>
                </div>
                <div className="category_item">
                    <img src="https://texnomart.uz/files/global/page/icons/Bonus.svg" alt="" />
                    <h3>To'lov bo'yicha </h3>
                    <p>Lorem ipsum </p>
                    <BsArrowRight/>
                </div>
                <div className="category_item">
                    <img src="https://texnomart.uz/files/global/page/icons/FAQ.svg" alt="" />
                    <h3>To'lov bo'yicha</h3>
                    <p>Lorem ipsum dolor </p>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}

export default Category
