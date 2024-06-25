import Link from 'next/link';
import Image from 'next/image';
import styles from './Catalog.module.css'

import ks22 from './assets/ks_e22.png'
import s2 from './assets/s2.svg'
import s3 from './assets/s3.svg'
import s4 from './assets/s4.svg'
import s5 from './assets/s5.svg'
import s6 from './assets/s6.svg'
import s7 from './assets/s7.svg'
import s8 from './assets/s8.png'
import s9 from './assets/s9.png'
import s10 from './assets/s10.png'
import s11 from './assets/s11.png'
import s12 from './assets/s12.png'
import s13 from './assets/s13.png'
import s14 from './assets/s14.png'

export default function Catalog() {
    return (

        <div className={styles.container}>
            
            <div className={styles.grid}>
                <div className={styles.item}>
                    <Image src={ks22} alt = "Самокат"/>
                    <p className={styles.text}> KS E22</p>
                </div>
                <div className={styles.item}>
                    <Image src={s2} alt = "Самокат"/>
                    <p className={styles.text}> KS ES1L</p>
                </div>
                <div className={styles.item}>
                    <Image src={s3} alt = "Самокат"/>
                    <p className={styles.text}> KS AIR T15</p>
                </div>
                <div className={styles.item}>
                    <Image src={s4} alt = "Самокат"/>
                    <p className={styles.text}> KS F30</p>
                </div>
                <div className={styles.item}>
                    <Image src={s5} alt = "Самокат"/>
                    <p className={styles.text}> KS E45</p>
                </div>
                <div className={styles.item}>
                    <Image src={s6} alt = "Самокат"/>
                    <p className={styles.text}> KS MAX</p>
                </div>
                <div className={styles.item}>
                    <Image src={s7} alt = "Самокат"/>
                    <p className={styles.text}> KS MAX</p>
                </div>
                <div className={styles.item}>
                    <Image src={s8} alt = "Самокат"/>
                    <p className={styles.text}> KS ES 2</p>
                </div>
                <div className={styles.item}>
                    <Image src={s9} alt = "Самокат"/>
                    <p className={styles.text}> KS ES 3</p>
                </div>
                <div className={styles.item}>
                    <Image src={s10} alt = "Самокат"/>
                    <p className={styles.text}> EKS ZING E8</p>
                </div>
                <div className={styles.item}>
                    <Image src={s11} alt = "Самокат"/>
                    <p className={styles.text}> EKS ZING E10</p>
                </div>
                <div className={styles.item}>
                    <Image src={s12} alt = "Самокат"/>
                    <p className={styles.text}> EKS ZING E12</p>
                </div>
                <div className={styles.item}>
                    <Image src={s13} alt = "Самокат"/>
                    <p className={styles.text}> KS ES 4</p>
                </div>
                <div className={styles.item}>
                    <Image src={s14} alt = "Самокат"/>
                    <p className={styles.text}> ACCESSORIES</p>
                </div>
                
              
                
            </div>

                    <div className={styles.scrollBlock}>
                        
                        <div className={styles.item}>
                            <Image src={ks22} alt = "Самокат"/>
                            <p className={styles.text}> KS E22</p>
                        </div>
                        
                      
                        <div className={styles.item}>
                            <Image src={s2} alt = "Самокат"/>
                            <p className={styles.text}> KS ES1L</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s3} alt = "Самокат"/>
                            <p className={styles.text}> KS AIR T15</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s4} alt = "Самокат"/>
                            <p className={styles.text}> KS F30</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s5} alt = "Самокат"/>
                            <p className={styles.text}> KS E45</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s6} alt = "Самокат"/>
                            <p className={styles.text}> KS MAX</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s7} alt = "Самокат"/>
                            <p className={styles.text}> KS MAX</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s8} alt = "Самокат"/>
                            <p className={styles.text}> KS ES 2</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s9} alt = "Самокат"/>
                            <p className={styles.text}> KS ES 3</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s10} alt = "Самокат"/>
                            <p className={styles.text}> EKS ZING E8</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s11} alt = "Самокат"/>
                            <p className={styles.text}> EKS ZING E10</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s12} alt = "Самокат"/>
                            <p className={styles.text}> EKS ZING E12</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s13} alt = "Самокат"/>
                            <p className={styles.text}> KS ES 4</p>
                        </div>
                        <div className={styles.item}>
                            <Image src={s14} alt = "Самокат"/>
                            <p className={styles.text}> ACCESSORIES</p>
                        </div>
           
            </div>
        </div>
    );
}