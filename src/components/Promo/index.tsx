import Link from 'next/link';
import Image from 'next/image';
import styles from './Promo.module.css'


export default function Promo() {
    return (
        <div className={styles.container}>
                <p className={styles.text}> FREE 1 DAY SHIPPING WITHIN CALIFORNIA.</p>
            
        </div>
    );
}