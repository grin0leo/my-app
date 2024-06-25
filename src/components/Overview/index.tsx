'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Overview.module.css';

import ov from './overview.png'
import ovMobile from './overview2.png'

export default function Overview() {
    return (
        <div>
            <Image src={ov} alt = "Просмотр" className = {styles.imgL}/>
            <Image src={ovMobile} alt = "Просмотр" className = {styles.imgMobile}/>
        </div>
    );
}