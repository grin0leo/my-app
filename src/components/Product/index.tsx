import Link from 'next/link';
import Image from 'next/image';
import styles from './Product.module.css'

import segWay from "./assets/MAXG30EII_Productpicture_45frontview_1 1.png"
import inS from "./assets/inStock.svg"
import dots from "./assets/Dots.svg"
import gift from "./assets/gift.png"
import a from "./assets/a.svg"

import F from "./assets/payment/F.svg"
import F1 from "./assets/payment/F1.svg"
import F2 from "./assets/payment/F2.svg"
import F3 from "./assets/payment/F3.svg"
import F4 from "./assets/payment/F4.svg"
import F5 from "./assets/payment/F5.svg"
import F6 from "./assets/payment/F6.svg"
import F7 from "./assets/payment/F7.svg"
import F8 from "./assets/payment/F8.svg"
import F9 from "./assets/payment/F9.svg"
import F10 from "./assets/payment/F10.svg"
import F11 from "./assets/payment/F11.svg"
import F12 from "./assets/payment/F12.svg"
import F13 from "./assets/payment/F13.svg"
import F14 from "./assets/payment/F14.svg"
import F15 from "./assets/payment/F15.svg"

import left from "./assets/mobile/left.svg"
import right from "./assets/mobile/right.svg"



export default function Product() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.namePrice}>
                    <Image src={inS} alt='В наличии'/>
                    <p className={styles.name}>
                    SEGWAY NINEBOT KICKSCOOTER MAX  
                    </p>

                    <div className={styles.totalBlock}>

                        <p className={styles.randomText}>Add an extended warranty from <strong>Extend</strong></p>
                        <div className={styles.yearsBlock}>

                            <div className={styles.yearsFill}>
                                <p className={styles.yearsFont}>1 Year - $139</p>
                            </div>
                            <div className={styles.yearsFill}>
                                <p className={styles.yearsFont}>2 Year - $209</p>
                            </div>
                            <div className={styles.yearsFill}>
                                <p className={styles.yearsFont}>3 Year - $279</p>
                            </div>
                        
                        </div>

                        <div className={styles.promoBlock}>

                            <div className={styles.priceBlock}>
                                <p className={styles.price1}>$1049.99</p>
                                <p className={styles.price2}>$949.99</p>
                            </div>
                            <p className={styles.promoFont}>
                                Segway Protective
                                Gear Set as a gift
                            </p>
                            <Image src={gift} alt= "Защита"/>

                        </div>
                        
                        <div className={styles.buttonsBlock}>

                            <div className={styles.button}>BUY IT NOW</div>
                            <div className={styles.button}>ADD TO CART</div>
                            


                        </div>

                    </div>

                    <div className={styles.paymentBlock}>

                        <div className={styles.paymentTexts}>

                            <p className={styles.pt1}>Payment Methods:</p>
                            <p><span className={styles.blue}>Starting at $55/mo with<Image src={a} alt='a'/></span>. <span className={styles.green}>Prequalify now</span></p>

                        </div>

                        <div className={styles.payMethod}>
                            <Image src={F} alt='Способо оплаты'/>
                            <Image src={F1} alt='Способо оплаты'/>
                            <Image src={F2} alt='Способо оплаты'/>
                            <Image src={F3} alt='Способо оплаты'/>
                            <Image src={F4} alt='Способо оплаты'/>
                            <Image src={F5} alt='Способо оплаты'/>
                            <Image src={F6} alt='Способо оплаты'/>
                            <Image src={F7} alt='Способо оплаты'/>
                            <Image src={F8} alt='Способо оплаты'/>
                            <Image src={F9} alt='Способо оплаты'/>
                            <Image src={F10} alt='Способо оплаты'/>
                            <Image src={F11} alt='Способо оплаты'/>
                            <Image src={F12} alt='Способо оплаты'/>
                            <Image src={F13} alt='Способо оплаты'/>
                            <Image src={F14} alt='Способо оплаты'/>
                            <Image src={F15} alt='Способо оплаты'/>
                            


                        </div>


                    </div>

                </div>

                <div className= {styles.segWay}>

                    <Image src={segWay} alt = "Самокат" className={styles.segWayImg}/>
                    <Image src={dots} alt = "Точечьки " />    

                </div>
                
            </div>


                    {/*МОБИЛЬНАЯ ВЕРСТКА*/}
            <div className={styles.mobileContainer}>
                <Image src={inS} alt='В наличии'/>
                
                <p className={styles.name}>
                    SEGWAY NINEBOT KICKSCOOTER MAX  
                </p>

                <div className={styles.SegArrow}>
                    <Image src={left} alt='Влево'/>
                    <Image src={segWay} className={styles.ImgMobile} alt = "Самокат" />
                    <Image src={right}alt='Вправо'/>
                </div>
                <Image src={dots} alt='Больше'/>

                <div className={styles.mobilePromo}>
                    <div className={styles.PromoText}>
                        <p className={styles.mPT1}> SEGWAY PROTECTIVE GEAR SET <span className={styles.blueMPT1}>AS A GIFT</span>   </p>
                        <p className={styles.mPT2}>The cost of a protection kit when buying a scooter is $0 instead of $29.99</p>
                        
                    </div> 
                    <Image src={gift} alt='Защита'className={styles.flippedImageGift}/>       
                </div>

                    <div className={styles.totalBlock}>

                        <p className={styles.randomText}>Add an extended warranty from <strong>Extend</strong></p>
                        <div className={styles.yearsBlock}>

                            <div className={styles.yearsFill}>
                                <p className={styles.yearsFont}>1 Year <span className={styles.BluePrice}>$139</span></p>
                            </div>
                            <div className={styles.yearsFill}>
                                <p className={styles.yearsFont}>2 Year <span className={styles.BluePrice}>$209</span></p>
                            </div>
                            <div className={styles.yearsFill}>
                                <p className={styles.yearsFont}>3 Year <span className={styles.BluePrice}>$279</span></p>
                            </div>
                        
                        
                        </div>

                        <div className={styles.priceBlock}>
                                <p className={styles.price1}>$1049.99</p>
                                <p className={styles.price2}>$949.99</p>
                        </div>

                        <div className={styles.buttonsBlock}>

                            <div className={styles.button}>BUY IT NOW</div>
                            <div className={styles.button}>ADD TO CART</div>

                        </div>
                    </div>

                    <div className={styles.paymentBlock}>
                        <p className={styles.pt1}>Payment Methods:</p>
                        <div className={styles.payMethod}>
                                <Image src={F} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F1} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F2} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F3} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F4} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F5} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F6} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F7} alt='Способо оплаты'className={styles.IconMob}/>
                        </div>
                        <div className={styles.payMethod}>
                                
                                <Image src={F8} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F9} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F10} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F11} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F12} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F13} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F14} alt='Способо оплаты'className={styles.IconMob}/>
                                <Image src={F15} alt='Способо оплаты'className={styles.IconMob}/>
                        </div>
                                


                        
                            
                        <div className={styles.paymentTexts}>

                            
                            <p><span className={styles.blue}>Starting at $55/mo with<Image src={a} alt='a'/></span>. <span className={styles.green}>Prequalify now</span></p>

                        </div>




                    </div>

            </div>
            
        </>
        

        

        


        
    );
}