import React,{useState, useEffect} from 'react'
import './ProductShow.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import {db} from '../../firebase'
import {RiScales3Line} from 'react-icons/ri'
import {MdStar} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'

function ProductShow({match}) {
    const [product, setProduct] = useState([123])
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
    const filter = product?.filter(item => item.uniqueId === match.params.productInfo)[0]?.data.product

    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="product_info">
                <div className="product_infoImage">
                    <img src={filter?.image} alt="" />
                </div>
                <div className="product_infoText">
                    <h3 className="pro_title">{filter?.title}</h3>
                    <div className="rating">
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <AiFillMessage/>
                    <span>Sharhlar</span>
                </div>
                    <div className="product_infoPice">
                        <div>
                            <p>Umumiy qiymati</p>
                            <h3>{filter?.price} so'm</h3>
                        </div>
                        <div>
                            <p>To'lov bir oy ichida</p>
                            <h3>{Math.floor(filter?.price / 11)} so'm</h3>
                        </div>
                    </div>
                    <div className="pro_infoBtns">
                        <button className="product_buy">Buy</button>
                        <button className="product_buy">Sotib olish</button>
                        <button className="product_scale"><RiScales3Line/></button>
                    </div>
                    <h4>Qisqa ma'lumot Smartfon TECNO Camon 17P CG7n 6 / 128Gb Frost Silver</h4>
                    <div className="pro_infoUl">
                        <ul>
                            <li>Brend:TECNO</li>
                            <li>OS versiyasi:Android 11</li>
                            <li>Koson materiali:Plastik</li>
                            <li>SIM -karta turi:nano SIM</li>
                            <li>Ekran turi:Rangli IPS, teging</li>
                        </ul>
                        <ul>
                            <li>
Ishlab chiqaruvchi mamlakat:
Xitoy</li>
                            <li>OS versiyasi:Android 11</li>
                            <li>Koson materiali:Plastik</li>
                            <li>
Olchamlari (GxYxT) mm:
76.44x168.67x8.82</li>
                            <li>Ekran turi:Rangli IPS, teging</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductShow
