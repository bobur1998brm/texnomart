import React from 'react'
import './ProductWrapper.css'
import Product from '../product/Product'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

function ProductWrapper({data,addToBasket,setHoverPro,animateImg}) {
    return (
        <div className="container">
            <div className="productWrapper">
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
                pagination={{
                clickable: true
                }}
                className="mySwiper"
            >
            {
                data?.map((item)=> <SwiperSlide  key={item.uniqueId}>
                    <Product setHoverPro={setHoverPro} animateImg={animateImg} addToBasket={addToBasket} data={item.data.product} id={item.uniqueId} />
                </SwiperSlide>)
            }
            </Swiper>
            </div>
        </div>
    )
}

export default ProductWrapper
