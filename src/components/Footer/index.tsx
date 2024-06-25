'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.css';

import iconSrc from './assets/segway 2.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image src={iconSrc} className={styles.icon}  alt='Логотип'/>
                <div className={styles.info}>
                    <div className={styles.number}>+ 1(888) 777-77-77</div>

                    <div className={styles.number}>
                        2637 Fairfax Ave
                    Culver City, CA 90232
                    </div>

                    <div className={styles.number}>Segway California © 2017</div>
                    
                </div>
                
            </div>
        </footer>
    );
}