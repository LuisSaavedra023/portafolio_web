import React,{useState, useEffect} from 'react';
import styles from './About.module.css';

const About = () => {
    const [currentComponent, setCurrentComponent] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                const isSectionInView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0;
                const sectionId = sec.getAttribute('id');
                if (isSectionInView) {
                    setCurrentComponent(sectionId);
                };
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return ( 
        <section className={`${styles.about} ${currentComponent === 'about' ? styles['show-animate']: ''}`} id="about">
            <h2 className={styles.heading}>
                Quién <span>Soy</span>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "1" }}></span>
            </h2>
            <div className={`${styles['about-img']}`}>
                <img src="/images/about.jpg" alt=""></img>
                <span className={`${styles['circle-spin']}`}></span>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "2" }}></span>
            </div>
            <div className={`${styles['about-content']}`}>
                <h3>Desarrollador Web!
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "3" }}></span>
                </h3>
                <p>
                    Con una sólida base en el desarrollo backend y una pasión por las bases de datos, he acumulado una amplia experiencia en el campo del desarrollo web a lo largo de toda mi formación hasta hoy en día. Aunque no he tenido la oportunidad de ejercer profesionalmente, mi enfoque se centra en la creación de soluciones robustas. ¡Cada día busco aprender y enfrentar nuevos desafíos en este apasionante viaje!
                    <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "4" }}></span>
                </p>
                <div className={`${styles['btn-box']} ${styles.btns}`}>
                    <a href="..." className={`${styles['btn-about']}`}>Más sobre mi</a>
                    <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "5" }}></span>
                </div>
            </div>
        </section>
    );
}
 
export default About;