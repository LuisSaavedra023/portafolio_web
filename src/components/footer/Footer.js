import React,{useState, useEffect} from 'react';
import styles from './Footer.module.css'

const Footer = () => {

    const [showFooterAnimation, setShowFooterAnimation] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            const rect = footer.getBoundingClientRect();
            const scrollThreshold = window.innerHeight * 0.9; 

            if (rect.top < scrollThreshold) {
                setShowFooterAnimation('footer');
            } else {
                setShowFooterAnimation('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <footer className={`${styles.footer} ${showFooterAnimation === 'footer'? styles['show-animate']: ''} `}>
            <div className={`${styles['footer-text']}`}>
                <p>Copyright &copy; 2023 by Luis Saavedra Ramírez | All Rights Reserved</p>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "1" }}></span>
            </div>
            <div className={`${styles['footer-iconTop']}`}>
                <a href="..."><i className='bx bx-up-arrow-alt'></i></a>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "2" }}></span>
            </div>
        </footer>
    )
}
 
export default Footer;
