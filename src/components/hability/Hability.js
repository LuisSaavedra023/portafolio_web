import React, {useState, useEffect} from 'react';
import styles from './Hability.module.css';
import TypeHability from '../skills/TypeHability';

const Hability = () => {

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
        //se agrega un event listener para el evento de scroll
        window.addEventListener('scroll', handleScroll);
        //llamado a handleScroll inicialmente para determinar la sección inicial
        handleScroll();
        //limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  

    const [selectedHability, setSelectedHabilities] = useState({
        hability: 'front'
    });

    const handleHabilityClick = (hability) => {
        setSelectedHabilities({
            ...selectedHability,
            hability
        });
    };

    return ( 
        <section className={`${styles.skills} ${currentComponent === 'skills' ? styles['show-animate']: ''}`} id="skills">
            <h2 className={styles.heading}>
                Mis <span>Habilidades</span>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "1" }}></span>
            </h2>
            <div className={`${styles['skills-row']}`}>
                <div className={`${styles['skills-column']}`}>
                    <div className={`${styles['skills-box-left']}`}>
                        <button
                            onClick={() => {handleHabilityClick('front')}}
                        >
                            FrontEnd
                        </button>
                        <button 
                            onClick={() => {handleHabilityClick('back')}}
                        >
                            Backend
                        </button>
                        <button 
                            onClick={() => {handleHabilityClick('data_base')}}
                        >
                            Bases de datos
                        </button>
                        <button 
                            onClick={() => {handleHabilityClick('version_control')}}
                        >
                            Control de versiones
                        </button>
                        <button
                            onClick={() => {handleHabilityClick('methodologies')}}
                        >
                            Metodologías
                        </button>
                        <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "2" }}></span>
                    </div>
                </div>
                <div className={`${styles['skills-column']}`}>
                    <div className={`${styles['skills-box']}`}>
                        <div className={`${styles['skills-content-right']}`}>
                            <TypeHability
                                hability={selectedHability}
                            />
                        <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "3" }}></span>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Hability;