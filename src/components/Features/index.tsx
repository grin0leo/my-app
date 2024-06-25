'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Features.module.css';

import back from './assets/bG.png'
import backMobile from './assets/bGMobile.png'

import s1 from './assets/s1.svg'
import s2 from './assets/s2.svg'
import s3 from './assets/s3.svg'
import s4 from './assets/s4.svg'
import s5 from './assets/s5.svg'
import s6 from './assets/s6.svg'
import s7 from './assets/s7.svg'
import s8 from './assets/s8.svg'

export default function Features() {
    return (
        <div className={styles.container}>
            <div className={styles.imgBlock}>
                <Image src={back} alt='Картинка' className={styles.img}/>
                <Image src={backMobile} alt='Картинка'className={styles.imgMob}/>
            </div>

            <div className={styles.mainBlock}>
                <p className={styles.mainText}>IMPRESSIVE FEATURES</p>

                <div className={styles.grid}>

                    <div className={styles.item}>
                        
                        <div className={styles.icon}>
                            <Image src={s1} alt='Колеса' className={styles.iconSize}/>
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>10”</div>
                            <div className={styles.text2}>Pneumatic Tires</div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s2} alt='Лампочка' className={styles.iconSize}/>
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>LED</div>
                            <div className={styles.text2}>Front LED Lights</div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s3} alt='Спидометр' className={styles.iconSize}/>
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>18.6 mph</div>
                            <div className={styles.text2}>Max Speed</div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s4} alt='Путь' className={styles.iconSize}/>
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>40.4 Miles</div>
                            <div className={styles.text2}>Max Range</div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s5} alt='Угол'className={styles.iconSize} />
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>20%</div>
                            <div className={styles.text2}>Hill Grade</div>
                        </div>

                    </div> 

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s6} alt='Капля'className={styles.iconSize} />
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>IPX5</div>
                            <div className={styles.text2}>Water-Resistant</div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s7} alt='Часы'className={styles.iconSize} />
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>6H</div>
                            <div className={styles.text2}>Fast Charging</div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.icon}>
                            <Image src={s8} alt='<Батарея>'className={styles.iconSize} />
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text1}>551Wh</div>
                            <div className={styles.text2}>Battery</div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}