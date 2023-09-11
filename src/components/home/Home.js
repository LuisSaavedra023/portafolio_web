import React, {useState, useEffect} from 'react';
import styles from './Home.module.css'

const Home = () => {

    const [currentComponent, setCurrentComponent] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            //se obtiene la posición actual de desplazamiento.
            const scrollY = window.scrollY;
            //iteración a través de las secciones para determinar en cuál se encuentra
            sections.forEach((sec) => {
                const offsetTop = sec.offsetTop;
                const sectionHeight = sec.offsetHeight;
                const sectionId = sec.getAttribute('id');
                //verificación si la posición de desplazamiento está dentro de la sección actual.
                if (scrollY >= offsetTop && scrollY < offsetTop + sectionHeight) {
                    setCurrentComponent(sectionId);
                }
            });
        };
        //se agregar un event listener para el evento de scroll.
        window.addEventListener('scroll', handleScroll);
        //llamado a handleScroll inicialmente para determinar la sección inicial.
        handleScroll();
        //limpiar el event listener cuando el componente se desmonte.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <section className={`${styles.home} ${currentComponent === 'home' ? styles['show-animate']: ''} `} id="home">
            <div className={`${styles['home-content']}`}>
                <h1>Hola, Soy <span>Luis Saavedra</span>
                    <span className={styles.animate} style={{ "--i": "2" }}></span>
                </h1>
                <div className={`${styles['text-animate']}`}>
                    <h3>Desarrollador Web</h3>
                    <span className={styles.animate} style={{ "--i": "3" }}></span>
                </div>
                <p>¡Bienvenido a mi mundo digital!
                    Aquí encontrarás a un apasionado desarrollador web con un amor inquebrantable por el diseño y la tecnología.
                    A través de líneas de código y una pizca de creatividad, transformo ideas en experiencias interactivas y funcionales en la web.
                    Explora mi portafolio y descubre cómo he dado vida a diversas aplicaciones.
                    Siempre estoy emocionado por nuevos desafíos y oportunidades para colaborar.
                    ¡Vamos a hacer realidad tus ideas en el mundo digital juntos!
                    <span className={styles.animate} style={{ "--i": "4" }}></span>
                </p>
                <div className={styles['btn-box']}>
                    <a href="images/cv/cv_luis_saavedra_ramirez.pdf" download className={styles.btn}>Descargar CV <i className='bx bxs-download'></i></a>
                    <a href="#contact" className={styles.btn}>Contrátame</a>
                    <span className={styles.animate} style={{ "--i": "5" }}></span>
                </div>
            </div>
            <div className={`${styles['home-sci']}`}>
                <a href="https://www.facebook.com/MaxelitO/"><i className='bx bxl-facebook'></i></a>
                <a href="https://github.com/LuisSaavedra023"><i className='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/luis-saavedra-ramirez/"><i className='bx bxl-linkedin'></i></a>
                <span className={styles.animate} style={{ "--i": "6" }}></span>
            </div>
            <div className={`${styles['home-imgHover']}`}></div>
            <span className={`${styles.animate} ${styles['home-img']}`} style={{ "--i": "7" }}></span>
        </section>
    );
}
 
export default Home;
