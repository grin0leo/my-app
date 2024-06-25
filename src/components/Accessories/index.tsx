'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Accessories.module.css';

import ac1 from './assets/ac1.png'
import ac2 from './assets/ac2.png'
import ac3 from './assets/ac3.png'
import ac4 from './assets/ac4.png'
import ac5 from './assets/ac5.png'
import ac6 from './assets/ac6.png'
import ac7 from './assets/ac7.png'
import ac8 from './assets/ac8.png'
import ac9 from './assets/ac9.png'

export default function Accessories() {
    return (
        <div className={styles.container}>
            <div className={styles.h1}>ACCESSORIES </div>

            <div className={styles.grid}>

                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                    <Image src={ac1} alt='Модуль' className={styles.img}/>
                    
                    </div >
                    
                    <div className={styles.text1}>NINEBOT ENGINE SPEAKER</div>
                    <div className={styles.textBlock}>
                        <div className={styles.text2}>The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals</div>
                        <div className={styles.price}>$149.99</div>
                        <div className={styles.button}>ADD TO CART</div>

                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac2} alt='Модуль' className={styles.img}/>
                       

                    </div>

                    <div className={styles.text1}>EXTENSION ROD</div>

                    <div className={styles.textBlock}>
                        
                        <div className={styles.text2}>The curved, streamlined design of the helmet shell, coupled with the thick, high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.</div>
                        <div className={styles.price}>$29.99</div>
                        <div className={styles.button}>ADD TO CART</div>
                    </div>   
                </div>

                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        
                        <Image src={ac3} alt='Модуль' className={styles.img}/>
                        
                            
                        

                    </div>
                        <div className={styles.text1}>SEGWAY PROTECTIVE GEAR SET</div>
                    <div className={styles.textBlock}>
                        
                        <div className={styles.text2}>The curved, streamlined design of the helmet shell, coupled with the thick, high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.</div>
                        <div className={styles.price}>$29.99</div>
                        <div className={styles.button}>ADD TO CART</div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac4} alt='Рюкзак' className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}>NINEBOT LEISURE BACKPACK</div>
                    <div className={styles.text2}>The Ninebot leisure backpack adopts a stylish gray-yellow color contrast, adding a trendy accessory to your wardrobe.</div>
                    <div className={styles.price}>$69.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac5} alt='<Батарея>'className={styles.img}/>
                       

                    </div>
                    <div className={styles.text1}>SEGWAY EXTERNAL BATTERY</div>
                    <div className={styles.text2}>It is easy to install and increases the range of the ES1, ES2 & E22 to 27.9, 28 and 27 miles respectively and It also increases the speed</div>
                    <div className={styles.price}>$249.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac6} alt='Зарядка'className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}> SEGWAY CHARGER  </div>
                    <div className={styles.text2}>Whether at home, the office, or on your KickScooter journey, this Ninebot KickScooter by Segway Charger is designed to provide a safe and stable charge anytime, anywhere.</div>
                    <div className={styles.price}>$79.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                    <Image src={ac7} alt='Сумка'className={styles.img}/>
                    

                    </div>
                    <div className={styles.text1}>SEGWAY SCOOTER BAG</div>
                    <div className={styles.text2}>Tough EVA material, suitable for the entire Ninebot KickScooter by Segway line. 3L capacity gives you plenty of room to carry your phone, charger, bottled water, and other personal items.</div>
                    <div className={styles.price}>$49.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac8} alt='Крепление для телефона' className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}> SEGWAY PHONE HOLDER  </div>
                    <div className={styles.text2}>The dual screw, non-slip design offers ultimate security and versatility. The phone holder is applicable to multiple vehicle series.</div>
                    <div className={styles.price}>$29.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                    <Image src={ac9} alt='Сидушка' className={styles.img}/>
                    

                    </div>
                    <div className={styles.text1}>SCOOTER SEAT</div>
                    <div className={styles.text2}>This scooter seat is designed to work with the MAX. It offers high quality, comfort and safety that is in line with the MAX KickScooter.</div>
                    <div className={styles.price}>$119.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
{/* МОБИЛЬНАЯ ВЕРСТКА */}
            </div>
            
            <div className={styles.scrollBlock }>
                
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                    <Image src={ac1} alt='Модуль' className={styles.img}/>
                    
                    </div >
                    
                    <div className={styles.text1}>NINEBOT ENGINE SPEAKER</div>
                    <div className={styles.textBlock}>
                        <div className={styles.text2}>The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals</div>
                        <div className={styles.price}>$149.99</div>
                        <div className={styles.button}>ADD TO CART</div>

                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac2} alt='Модуль' className={styles.img}/>
                        

                    </div>

                    <div className={styles.text1}>EXTENSION ROD</div>

                    <div className={styles.textBlock}>
                        
                        <div className={styles.text2}>The curved, streamlined design of the helmet shell, coupled with the thick, high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.</div>
                        <div className={styles.price}>$29.99</div>
                        <div className={styles.button}>ADD TO CART</div>
                    </div>   
                </div>

                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        
                        <Image src={ac3} alt='Модуль' className={styles.img}/>
                        
                            
                        

                    </div>
                        <div className={styles.text1}>SEGWAY PROTECTIVE GEAR SET</div>
                    <div className={styles.textBlock}>
                        
                        <div className={styles.text2}>The curved, streamlined design of the helmet shell, coupled with the thick, high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.</div>
                        <div className={styles.price}>$29.99</div>
                        <div className={styles.button}>ADD TO CART</div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac4} alt='Рюкзак' className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}>NINEBOT LEISURE BACKPACK</div>
                    <div className={styles.text2}>The Ninebot leisure backpack adopts a stylish gray-yellow color contrast, adding a trendy accessory to your wardrobe.</div>
                    <div className={styles.price}>$69.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac5} alt='<Батарея>'className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}>SEGWAY EXTERNAL BATTERY</div>
                    <div className={styles.text2}>It is easy to install and increases the range of the ES1, ES2 & E22 to 27.9, 28 and 27 miles respectively and It also increases the speed</div>
                    <div className={styles.price}>$249.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac6} alt='Зарядка'className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}> SEGWAY CHARGER  </div>
                    <div className={styles.text2}>Whether at home, the office, or on your KickScooter journey, this Ninebot KickScooter by Segway Charger is designed to provide a safe and stable charge anytime, anywhere.</div>
                    <div className={styles.price}>$79.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                    <Image src={ac7} alt='Сумка'className={styles.img}/>
                   

                    </div>
                    <div className={styles.text1}>SEGWAY SCOOTER BAG</div>
                    <div className={styles.text2}>Tough EVA material, suitable for the entire Ninebot KickScooter by Segway line. 3L capacity gives you plenty of room to carry your phone, charger, bottled water, and other personal items.</div>
                    <div className={styles.price}>$49.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                        <Image src={ac8} alt='Крепление для телефона' className={styles.img}/>
                        

                    </div>
                    <div className={styles.text1}> SEGWAY PHONE HOLDER  </div>
                    <div className={styles.text2}>The dual screw, non-slip design offers ultimate security and versatility. The phone holder is applicable to multiple vehicle series.</div>
                    <div className={styles.price}>$29.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBlock}>
                    <Image src={ac9} alt='Сидушка' className={styles.img}/>
                    

                    </div>
                    <div className={styles.text1}>SCOOTER SEAT</div>
                    <div className={styles.text2}>This scooter seat is designed to work with the MAX. It offers high quality, comfort and safety that is in line with the MAX KickScooter.</div>
                    <div className={styles.price}>$119.99</div>
                    <div className={styles.button}>ADD TO CART</div>
                </div>


            </div>

            <div className={styles.SeeMore}>SEE MORE</div>

        </div>

    );
}