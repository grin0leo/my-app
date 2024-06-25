'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';
import binSrc from "./assets/bin.svg";
import insSrc from './assets/inst.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            
            <div className={styles.container} >
                
                <a className={styles.link} href="">REWIEWS </a>
                <a className={styles.link} href="">SHIPPING AND PAYMENT</a>
                <a className={styles.link} href="">WHOLESALE</a>
                <a className={styles.link} href="">BLOG</a>
                <a className={styles.link} href="">CONTACTS</a>
                <div className={styles.contacts}>
                    <div className={styles.number}>+ 1(888) 888-88-88</div>
                    <div className={styles.icons}>                
                                        
                        <Image src={binSrc} alt="Корзина"/>
                        <Image src={insSrc} className={styles.instIcons} alt='Инстаграм'/> 
                    </div>

                </div>
            </div>
                
        </header>
    );
}