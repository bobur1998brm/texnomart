import React, {useEffect,useState} from 'react';
import Banner from '../../components/banner/Banner';
import Busket from '../../components/busket/Busket';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Login from '../../components/login/Login';
import MiniSwiper from '../../components/miniswiper/MiniSwiper';
import Navbar from '../../components/navbar/Navbar';
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';
import {db} from '../../firebase'
import "./Home.css"

function Home() {
  const [product, setProduct] = useState([])
  const [showBusket, setShowBusket] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [order, setOrder] = useState([])
  const [hoverPro, setHoverPro] = useState({})
  const [hoverProClass, setHoverProClass] = useState(false)

  const animateImg = ()=>{
    document.querySelector(".animete_img")?.style.setProperty('--y',  hoverPro?.y - hoverPro?.top + 'px')
    setHoverProClass(true)
    setTimeout(()=>{
     setHoverProClass(false)
    },1400)
  }

  const showBusketF = () =>{
      setShowBusket(prev => !prev)
  }
  const showLoginF = () =>{
    setShowLogin(prev => !prev)
  }


  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    if(itemIndex < 0){
      const newItem = {
        ...item,
        quontity: 1
      }
      setOrder([...order, newItem])
    }else{
      const newOrder = order.map(( orderItem , inx)=>{
        if(inx===itemIndex){
          return{
            ...orderItem,
            quontity: orderItem.quontity + 1
          }
        }else{
          return orderItem
        }
      })
      setOrder(newOrder)
    }

   
  }
  const removeOrder = (id)=> {
    setOrder(order.filter(item=> item.id !== id))
  }

  useEffect(() => {
    db.collection("products").onSnapshot(productItem => {
        setProduct(
            productItem.docs.map((item) => ({
                uniqueId: item.id,
                data: item.data()
            }))
        )
    })
}, [])
  return (
    <div className="home">
        <Header showBusketF={showBusketF} order={order} showLoginF={showLoginF}/>
        <Navbar/>
        <Banner/>
        <MiniSwiper/>
        <h2 className="home_title">Yangi</h2>
        <ProductWrapper data={product} addToBasket={addToBasket} setHoverPro={setHoverPro} animateImg={animateImg}/>
        <div className="container">
          <img className="home_rek" src="https://texnomart.uz/files/global/page/samsung/samsung-banner.jpg" alt="" />
        </div>
        <h2 className="home_title">Bestseller</h2>
        <ProductWrapper data={product} addToBasket={addToBasket} setHoverPro={setHoverPro} animateImg={animateImg}/>
        <h2 className="home_title">Tavsiya etilgan mahsulotlar</h2>
        <ProductWrapper data={product} addToBasket={addToBasket} setHoverPro={setHoverPro} animateImg={animateImg}/>


        <h2 className="home_title">Telefonlar va maishiy texnika qismlarga bo'lib</h2>
        <Category/>
        <Footer/>
        <Login showLoginF={showLoginF} showLogin={showLogin}/>
        <Busket showBusketF={showBusketF} showBusket={showBusket} order={order} removeOrder={removeOrder} />
        <div style={{top:`${hoverPro?.y - 320}px`,left:`${hoverPro?.x - 30}px`,background:`url(${hoverPro?.img}) no-repeat center/contain`}} className= {hoverProClass?"animete_img ani":"animete_img"}>
        </div>
    </div>
  );
}

export default Home;
