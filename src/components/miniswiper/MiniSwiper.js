import React from 'react'
import './MiniSwiper.css'
import {MINI_SWIPER} from '../../data/STATIC_DATA'

function MiniSwiper() {
    return (
        <div className="miniswiper">
            {
                MINI_SWIPER?.map(item=> <div key={item.id} className="miniswiper_item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                </div>)
            }
        </div>
    )
}

export default MiniSwiper
