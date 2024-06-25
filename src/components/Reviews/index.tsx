'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Reviews.module.css';

import r1 from './assets/r1.jpg'
import arL from './assets/Arrows2.png'
import arR from './assets/Arrows1.png'

export default function Reviews() {
    return (
        <div className={styles.container}>
            <div className={styles.text}> REVIEWS</div>
            
            <div className={styles.reviews}>
                <Image src={arL}alt='Левая стрелка'className={styles.icon}/>
                <Image src={r1} alt='Отзыв' className={styles.img}/>
                <Image src={r1} alt='Отзыв'className={styles.img}/>
                <Image src={r1} alt='Отзыв'className={styles.img}/>
                <Image src={arR}alt='Правая стрелка'className={styles.icon}/>
            </div>

            <div className={styles.scrollBlock}>
                <Image src={r1} alt='Отзыв' className={styles.img}/>
                <Image src={r1} alt='Отзыв'className={styles.img}/>
                <Image src={r1} alt='Отзыв'className={styles.img}/>
            </div>
        </div>
    );
}