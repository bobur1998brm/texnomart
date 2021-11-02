import React, {useState,useEffect} from 'react'
import classes from './Banner.module.css'
import {BANNER_DATA} from '../../data/STATIC_DATA'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

function Banner() {
    const [imageIndex, SetImageIndex] = useState(0)
    // const slideToRight = ()=>{
    //     if(imageIndex >= BANNER_DATA.length - 1){
    //         SetImageIndex(0)
    //     }else{
    //         SetImageIndex(prev => prev + 1)
    //     }
    // }
    // const slideToLeft = ()=>{
    //     if(imageIndex === 0){
    //         SetImageIndex(BANNER_DATA.length - 1)
    //     }else{
    //         SetImageIndex(prev => prev - 1)
    //     }
        
    // }
    useEffect(()=>{
        const lastIndex = BANNER_DATA.length - 1;
        if(imageIndex < 0){
            SetImageIndex(lastIndex)
        }
        if(imageIndex > lastIndex){
            SetImageIndex(0)
        }
    },[imageIndex])

    useEffect(()=>{
        let slider = setInterval(()=>{
            SetImageIndex(prev=> prev+1)
        },4000)
        return ()=> clearInterval(slider)
    },[])   
   
    return (
        <div className={classes.banner}>
            <div className={classes.banner_leftIcon} onClick={()=> SetImageIndex(prev=> prev-1)}>
                <FiChevronLeft/>
            </div>
            {/* <img className={classes.banner__image} src={BANNER_DATA[imageIndex]?.imageURL} alt={BANNER_DATA[imageIndex]?.imageDesc} /> */}
            <div style={{transform: `translate(-${imageIndex * (100 / (BANNER_DATA.length ))}%)`}} className={classes.banner__imageContainer}>
                {
                    BANNER_DATA.map((img, ind)=>(
                        <div key={ind} className={classes.banner__imageContainerItem}>
                            <img className={classes.banner__image} src={img.imageURL} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className={classes.banner_rightIcon} onClick={()=> SetImageIndex(prev=> prev+1)}>
                <FiChevronRight/>
            </div>
        </div>
    )
}

export default Banner
