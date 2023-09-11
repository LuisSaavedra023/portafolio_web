import React,{useState, useEffect} from 'react';
import styles from './Training.module.css';

const Training = () => {
    const [currentComponent, setCurrentComponent] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            
            //iteración a través de las secciones para determinar en cuál se encuentra.
            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                const isSectionInView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0;
                const sectionId = sec.getAttribute('id');
                //verificación si la sección está en la vista actual.
                if (isSectionInView) {
                    setCurrentComponent(sectionId);
                };
            });
        };
        //se agrega un event listener para el evento de scroll.
        window.addEventListener('scroll', handleScroll);
        //llamado a handleScroll inicialmente para determinar la sección inicial.
        handleScroll();
        //limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <section className={`${styles.training} ${currentComponent === 'training' ? styles['show-animate']: ''}`} id="training">
            <h2 className={styles.heading}>Mi <span>Formación</span>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "1" }}></span>
            </h2>
            <div className={`${styles['training-row']}`}>
                <div className={`${styles['training-column']}`}>
                    <h3 className={styles.title}>
                        Educación
                        <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "2" }}></span>
                    </h3>
                    <div className={`${styles['training-box']}`}>
                        <div className={`${styles['training-content']}`}>
                            <div className={styles.content}>
                                <div className={styles.year}>
                                    <i className='bx bxs-calendar'></i> 2021 - 2023
                                </div>    
                                <h3>Duoc UC</h3>
                                <h4>Analista Programador Computacional</h4>
                                <p>
                                    Mi formación en esta carrera me ha brindado una sólida comprensión de los principios de programación y desarrollo de software. Con habilidades en diseño de algoritmos, desarrollo de aplicaciones y gestión de bases de datos, estoy comprometido a transformar ideas en código funcional y eficiente.
                                </p>
                            </div>
                            <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "3" }}></span>
                        </div>
                    </div>
                </div>
                <div className={`${styles['training-column']}`}>
                    <h3 className={styles.title}>
                        Experiencia
                        <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "2" }}></span>
                    </h3>
                    <div className={`${styles['training-box']}`}>
                        <div className={`${styles['training-content']}`}>
                            <div className={styles.content}>
                                <div className={styles.year}>
                                    <i className='bx bxs-calendar'></i> 2023
                                </div>        
                                <h3>Desarrollador Web</h3>
                                <h4>Datafy | Práctica Profesional</h4>
                                <p>
                                Durante mi práctica profesional, he tenido el privilegio de sumergirme en el emocionante mundo del desarrollo web fullstack. Mi experiencia abarca desde la creación de elegantes interfaces de usuario hasta la implementación de robustas funcionalidades en el backend.
                                </p>
                            </div>
                            <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "4" }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Training;