
import Link from 'next/link';
import Image from 'next/image';
import styles from './owner.module.css'

import ownSrc from './assets/owner.svg'
import logoSrc from './assets/logo.svg'

import bin from './assets/mobile/bin.svg'
import inst from './assets/mobile/inst.svg'
import phone from './assets/mobile/phone.svg'
import burger from "./assets/mobile/burger.svg"

export default function Owner() {
    return (
        <div className={styles.container}>
            <Image src={burger} className={styles.mobile} alt='Меню'/>
            <Image src={logoSrc} className={styles.logo} alt='Логотип'/>

            <div className={styles.info}>
                <Image src={ownSrc} alt = 'Владелец'/>

                <div className={styles.ask}>
                    <p className={styles.name}>JOHN SMITH</p>
                    <a href="" className={styles.link}>ask a question to the director</a>
                </div>


            </div>
            <div className={styles.mobileBlock}>

                <Image src={phone} alt='Телефон' className={styles.mobile}/>
                <Image src={inst} alt='Инстаграм' className={styles.mobile}/>
                <Image src={bin} alt='Корзина'className={styles.mobile}/>

            </div>
            
        </div>
    );
}