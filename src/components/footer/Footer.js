import React from 'react'
import './Footer.css'
import {GoLocation} from 'react-icons/go'
import {FaFacebookF,FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {VscSettingsGear} from 'react-icons/vsc'
import {BsShare, BsTelephonePlus} from 'react-icons/bs'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_grid">
                    <div className="footer_item">
                        <div className="footer_social">
                            <VscSettingsGear/>
                            <div>
                                <p>Savolingiz bormi? Qo'ng'iroq qiling</p>
                                <h3>+998 95 019 06 68</h3>
                            </div>
                        </div>
                        <div className="footer_social">
                            <GoLocation/>
                            <div>
                                <p>Manzil va kontaktlar</p>
                                <h3>Bizning do'konlar</h3>
                            </div>
                        </div>
                        <div className="footer_social">
                            <BsShare/>
                            <div>
                                <p>Biz ijtimoiy tarmoqlarda</p>
                                <h3>Obuna bo'lish</h3>
                                <div className="footer_socialIcons">
                                    <div><FaFacebookF/></div>
                                    <div> <AiOutlineInstagram/></div>
                                    <div>     <FaTelegramPlane/></div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_social">
                            <BsTelephonePlus/>
                            <div>
                                <p>Ishonch telefoni</p>
                                <h3>+998 95 019 06 68</h3>
                            </div>
                        </div>
                    </div>
                    <div className="footer_item">
                        <h3>Kompaniya</h3>
                        <ul>
                            <li>B2B</li>
                            <li>Technomart haqida</li>
                            <li>Technomart haqida info</li>
                            <li>Technomart</li>
                            <li>Technomart haqida</li>
                            <li>Technomart </li>
                            <li>Technomart haqida</li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <h3>Kompaniya</h3>
                        <ul>
                            <li>B2B</li>
                            <li>B2B echnomart haqida</li>
                            <li>Technomart haqida</li>
                            <li>Technomart haqida info</li>
                            <li>Technomart</li>
                            <li>Technomart haqida</li>
                            <li>Technomart </li>
                            <li>Technomart haqida</li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <h3>Biz qabul qilamiz</h3>
                        <div className="footer_credidt">
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/zoodpay.png" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/images/icons/card-uzcard.png" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/zoodmall.svg" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/zmarket.svg" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/paymart.svg" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/201229-182218.png" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/click.jpg" alt="" />
                            </div>
                            <div className="footer_credidtItem">
                                <img src="https://texnomart.uz/files/global/Payments/humo3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_logo">
                        <img src="https://texnomart.uz/images/logo.png" alt="" />
                    </div>
                    <p>2016-2021 © Texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga to'g'ri keladi  tomonidan ishlab chiqilgan</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
