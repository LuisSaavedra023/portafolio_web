import React, {useState, useEffect} from 'react';
import styles from './Hability.module.css';
import TypeHability from '../skills/TypeHability';

const Hability = () => {

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