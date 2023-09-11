import React,{useState, useEffect} from 'react';
import styles from './Proyects.module.css';

const Proyects = () => {
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
        <section className={`${styles.proyect} ${currentComponent === 'proyects' ? styles['show-animate']: ''}`} id="proyects">
            <h2 className={styles.heading}>Mis <span>Proyectos</span>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "1" }}></span>
            </h2>
            <h3 className={`${styles['sub-title']}`}>
                "Si lo puedes imaginar, lo puedes programar"
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "2" }}></span>
            </h3>
            <div className={`${styles['proyect-row']}`}>
                <div className={`${styles['proyect-column']}`}>
                    <div className={`${styles.card}`}>
                        <img src="/images/product-backlog.jpeg" alt="" className={`${styles['card-img-top']}`} />
                        <div className={`${styles['card-body']}`}>
                            <h5 className={`${styles['card-title']}`}>Backlog Priority</h5>
                            <p className={`${styles['card-text']}`}>
                            Backlog Priority es un proyecto demostrativo que muestra mi enfoque en la gestión de proyectos y la priorización de tareas. ¡Diseñado para llevar un seguimiento de tus historias de usuario!
                            </p>
                        </div>
                        <div className={`${styles['card-sci']}`}>
                            <p><i className='bx bxl-react'></i></p>
                            <p><i className='bx bxl-django' ></i></p>
                            <p><i className='bx bxl-firebase'></i></p>
                        </div>
                        <div className={`${styles['card-body']}`}>
                            <div className={styles['btn-box-card']}>
                                <a href="..." className={styles.btn}>Ver Proyecto</a>
                                <a href="..." className={styles.btn}>Repositorio</a>
                            </div>
                        </div>
                        <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "3" }}></span> 
                    </div>
                </div>
                <div className={`${styles['proyect-column']}`}>
                    <div className={`${styles.card}`}>
                        <img src="/images/junta-vecinal.jpeg" alt="" className={`${styles['card-img-top']}`} />
                        <div className={`${styles['card-body']}`}>
                            <h5 className={`${styles['card-title']}`}>Junta Vecinal A Un Click</h5>
                            <p className={`${styles['card-text']}`}>
                            Junta Vecinal a un Click es un proyecto innovador que busca transformar la manera en que las comunidades interactúan y se mantienen informadas.
                            </p>
                        </div>
                        <div className={`${styles['card-sci']}`}>
                            <p><i className='bx bxl-react'></i></p>
                            <p><i className='bx bxl-django' ></i></p>
                            <p><i className='bx bxl-firebase'></i></p>
                        </div>
                        <div className={`${styles['card-body']}`}>
                            <div className={styles['btn-box-card']}>
                                <a href="..." className={styles.btn}>Ver Proyecto</a>
                                <a href="..." className={styles.btn}>Repositorio</a>
                            </div>
                        </div>
                        <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "4" }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Proyects;