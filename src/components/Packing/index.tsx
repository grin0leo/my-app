'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Packing.module.css';
import player from './assets/play.png'
import rB from './assets/rightBlock.png'

const playerPath = player.src; 
// Что бы poster заработал нужно передать ему именно string, а изначально 
// Next импортирует в другом типе данных, несовместимым с ожидаемым
// поэтому я присваиваю другой константе именно стринговый путь к изображеню
// с помощью src 


export default function Packing() {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.text} >
                    PACKING LIST
                </div>
                <Image src={rB} alt='Устройство' className={styles.imgMobile}/>
                {/* плеер без видео зато со статичной картинкой */}
                <video className={styles.video}  poster={playerPath}>
                </video>    
            </div>
            
            <Image src={rB} alt='Устройство' className={styles.img}/>

        </div>
    );
}