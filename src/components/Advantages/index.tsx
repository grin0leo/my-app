'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Advantages.module.css';

import a1 from './assets/a1.svg'
import a2 from './assets/a2.svg'
import a3 from './assets/a3.svg'
import a4 from './assets/a4.svg'
import m from  './assets/40m.png'
import m2 from './assets/40m2.svg'

export default function Advantages() {
    return (

    <>
        <div className={styles.container}>

            <div className={styles.itemsBlock}>
        
                <div className={styles.item}>
                    <Image src={a1} alt='Коробка'/>
                    <p className={styles.text}>Delivery within 1 business day</p>
                </div>
                <div className={styles.item}>
                    <Image src={a2} alt='Документ'/>
                    <p className={styles.text}>Basic 1 year warranty</p>
                </div>
                <div className={styles.item}>
                    <Image src={a3} alt='Инструменты'/>
                    <p className={styles.text}>After Sales Support</p>
                </div>
                <div className={styles.item}>
                    <Image src={a4} alt='Инструменты'/>
                    <p className={styles.text}>Up to 40 miles per charge</p>
                </div>
            </div>
        
            <div className={styles.description}>
                <div className={styles.textBlock}>
                    <div className={styles.descriptionText1}>
                        UP TO 40 MILES OF RANGE ON A SINGLE CHARGE
                    </div>
                    <div className={styles.descriptionText2}>
                        With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.
                    </div>
                </div>
                <Image src={m} alt='40 миль' className={styles.image}/>
            </div>
        </div>
        
        <div className={styles.mobileContainer}>
            <Image src={m2} alt='40 миль' className={styles.imgMobile}/>
            <div className={styles.textBlock}>
                <div className={styles.descriptionText1}> UP TO 40 MILES OF RANGE ON A SINGLE CHARGE  </div>
                <div className={styles.descriptionText2}>
                        With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.
                </div>
            <div className={styles.iconsBlock}>
                <Image src={a1} alt='Коробка'/>
                <Image src={a2} alt='Документ'/>
                <Image src={a3} alt='Инструменты'/>
                <Image src={a4} alt='Инструменты'/>  
            </div>
                
            </div>        
        </div>
    </>
    
    );
}